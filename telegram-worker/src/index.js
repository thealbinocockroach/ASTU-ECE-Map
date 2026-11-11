const FILE_PREFIX = 'file:';
const COURSE_CODE_PATTERN = /^[a-z][a-z0-9-]*\s*\d{3,4}$/i;
const MEDIA_FIELDS = ['document', 'photo', 'video', 'audio', 'animation', 'voice', 'video_note'];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }
    if (url.pathname === '/api/files' && request.method === 'GET') {
      return getFiles(url, env);
    }
    if (url.pathname === '/webhook' && request.method === 'POST') {
      return handleWebhook(request, env);
    }
    return json({ error: 'Not found' }, 404);
  }
};

async function getFiles(url, env) {
  if (!env.FILES) return json({ error: 'Catalog is not configured' }, 503);
  const requestedCode = normalizeCode(url.searchParams.get('code') || '');
  const entries = [];
  let cursor;

  do {
    const page = await env.FILES.list({ prefix: FILE_PREFIX, cursor, limit: 1000 });
    const values = await Promise.all(page.keys.map(key => env.FILES.get(key.name, 'json')));
    for (const value of values) {
      if (!value) continue;
      if (!requestedCode || normalizeCode(value.courseCode) === requestedCode) entries.push(value);
    }
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);

  entries.sort((a, b) => Number(b.messageId) - Number(a.messageId));
  return json(entries);
}

async function handleWebhook(request, env) {
  const suppliedSecret = request.headers.get('X-Telegram-Bot-Api-Secret-Token') || '';
  if (!env.WEBHOOK_SECRET || suppliedSecret !== env.WEBHOOK_SECRET) {
    return json({ error: 'Unauthorized' }, 401);
  }

  let update;
  try {
    update = await request.json();
  } catch {
    return json({ error: 'Invalid update' }, 400);
  }

  try {
    const channelPost = update.channel_post || update.edited_channel_post;
    if (channelPost) await indexChannelPost(channelPost, env);
    if (update.message?.chat?.type === 'private' && typeof update.message.text === 'string') {
      await handlePrivateMessage(update.message, env);
    }
  } catch (error) {
    console.error('Telegram update handling failed:', error instanceof Error ? error.message : 'unknown error');
  }

  // Acknowledge valid Telegram updates even if an individual Bot API call fails.
  return json({ ok: true });
}

async function indexChannelPost(message, env) {
  if (!env.FILES || !isConfiguredChannel(message.chat, env.CHANNEL_ID)) return;
  const key = `${FILE_PREFIX}${message.message_id}`;
  const caption = message.caption || '';
  const parsed = parseCaption(caption);

  if (!parsed || !MEDIA_FIELDS.some(field => message[field])) {
    await env.FILES.delete(key);
    return;
  }

  const record = {
    id: String(message.message_id),
    courseCode: parsed.courseCode,
    type: parsed.type,
    title: parsed.title,
    messageId: message.message_id
  };
  await env.FILES.put(key, JSON.stringify(record));
}

function isConfiguredChannel(chat, configuredChannel) {
  const value = String(configuredChannel || '').trim();
  if (!value || value.startsWith('REPLACE_')) return false;
  if (/^-?\d+$/.test(value)) return String(chat?.id) === value;
  return String(chat?.username || '').toLowerCase() === value.replace(/^@/, '').toLowerCase();
}

function parseCaption(caption) {
  const parts = String(caption).split('|').map(part => part.trim());
  if (parts.length < 3) return null;
  const courseCode = parts.shift();
  const type = parts.shift();
  const title = parts.join(' | ').trim();
  if (!COURSE_CODE_PATTERN.test(courseCode) || !type || !title) return null;
  return { courseCode, type, title };
}

async function handlePrivateMessage(message, env) {
  const text = message.text.trim();
  if (/^\/help(?:@\w+)?(?:\s|$)/i.test(text)) {
    await sendMessage(env, message.chat.id,
      'Open a course in ECE Map, choose a listed file, and tap Get file. You can also join the public channel archive.');
    return;
  }
  if (!/^\/start(?:@\w+)?(?:\s|$)/i.test(text)) return;
  const payload = text.replace(/^\/start(?:@\w+)?\s*/i, '').trim();

  if (!payload) {
    await sendMessage(env, message.chat.id,
      'Welcome to ECE Map downloads. Open a course in the app and tap Get file, or use /help.');
    return;
  }
  if (!/^\d{1,20}$/.test(payload)) {
    await sendMessage(env, message.chat.id, 'That file request is not valid. Please open the file from ECE Map.');
    return;
  }

  const file = await env.FILES?.get(`${FILE_PREFIX}${payload}`, 'json');
  if (!file || String(file.messageId) !== payload) {
    await sendMessage(env, message.chat.id, 'I could not find that file. It may have been removed from the catalog.');
    return;
  }

  const result = await telegramCall(env, 'copyMessage', {
    chat_id: message.chat.id,
    from_chat_id: env.CHANNEL_ID,
    message_id: file.messageId
  });
  if (!result.ok) {
    await sendMessage(env, message.chat.id, 'I could not send that file right now. Please try again later.');
  }
}

async function sendMessage(env, chatId, text) {
  await telegramCall(env, 'sendMessage', { chat_id: chatId, text });
}

async function telegramCall(env, method, payload) {
  if (!env.BOT_TOKEN) return { ok: false };
  const response = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return response.json();
}

function normalizeCode(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]/g, '');
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(), 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }
  });
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Telegram-Bot-Api-Secret-Token',
    'Access-Control-Max-Age': '86400'
  };
}
