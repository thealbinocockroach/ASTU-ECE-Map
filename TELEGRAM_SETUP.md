# Telegram downloads setup

The ECE app and web version read a public file catalog from a Cloudflare Worker. Files stay in your Telegram channel. The bot copies a requested channel post into the requesting user's private chat. The bot token is only stored as a Cloudflare Worker secret.

## 1. Create the Telegram bot and channel

1. Your public archive already exists as **@ECEFilesArchive**. Anyone can view its posts.
2. Since the earlier bot token was pasted into chat, revoke it in **@BotFather** and generate a replacement. Do not paste the new token into chat, the app, or a public message.
3. Add the bot to **@ECEFilesArchive** as an administrator so it receives channel posts. It does not need permission to post, edit, or delete messages.
4. Post only files you have permission to share. Use this exact caption pattern:

   `COURSE_CODE | TYPE | TITLE`

   Examples:

   - `ECEg 3102 | Lecture notes | Chapter 1`
   - `CSEg 1104 | Software | Python installer`

   The course code must match a course in the app. Any nonempty type and title are accepted. Posts without a matching caption and a file attachment are ignored.

## 2. Add the bot secrets and connect Telegram

The Cloudflare Worker is already deployed at **https://ece-downloads.yidotakele.workers.dev** and its `FILES` binding is connected to the `ECE_FILES` KV namespace. It is configured for **@ECEFilesArchive**. The catalog endpoint currently returns an empty list until files are posted.

In Cloudflare, open **Workers & Pages → ece-downloads → Settings → Variables and Secrets**. Add these as **Secrets** under the Production environment:

- `BOT_TOKEN`: the replacement token from BotFather.
- `WEBHOOK_SECRET`: a private random string containing only letters, numbers, `_`, or `-`.

To generate the webhook secret in PowerShell and copy it for the Cloudflare secret field, run this locally:

```powershell
$webhookSecret = [guid]::NewGuid().ToString('N')
Set-Clipboard $webhookSecret
```

Paste it into the Cloudflare `WEBHOOK_SECRET` field, save and deploy. Keep the PowerShell window open; the same value is needed to register Telegram's webhook. Never send either secret to me.

Then register the webhook from the same PowerShell window. This prompts for the replacement bot token without adding it to command history:

```powershell
$secureBotToken = Read-Host 'Bot token' -AsSecureString
$botToken = [System.Net.NetworkCredential]::new('', $secureBotToken).Password
$workerUrl = 'https://ece-downloads.yidotakele.workers.dev'
$secureWebhookSecret = ConvertTo-SecureString $webhookSecret -AsPlainText -Force
$plainWebhookSecret = [System.Net.NetworkCredential]::new('', $secureWebhookSecret).Password
$body = @{
  url = "$workerUrl/webhook"
  secret_token = $plainWebhookSecret
  allowed_updates = @('message', 'channel_post', 'edited_channel_post')
} | ConvertTo-Json
Invoke-RestMethod -Method Post -Uri "https://api.telegram.org/bot$botToken/setWebhook" -ContentType 'application/json' -Body $body
```

The response should show `ok: true`. A request to `$workerUrl/api/files` should return an empty JSON array until you post a correctly captioned file.

## 3. Connect the bot and publish the web version

Edit `app/src/main/assets/telegram-config.js` and set the bot's public username (without `@`). The Worker URL and archive channel are already filled in:

```js
window.ECE_DOWNLOAD_CONFIG = {
  apiBaseUrl: 'https://ece-downloads.yidotakele.workers.dev',
  botUsername: 'your_bot_username'
};
```

The username is public connection information, not a secret. Do not add the bot token to this file. Publish the same static assets used by Android as the web version. In Cloudflare, use **Workers & Pages → Create application → Upload your static files**, and upload the contents of `app/src/main/assets` as a Pages project named `ece-map`.

After changing `telegram-config.js`, upload the static assets again. To use downloads in the Android app, build and install a new APK after that change:

```powershell
cd ..
./gradlew.bat assembleDebug
```

## 4. Keep the catalog current

Post each new file in the channel with the caption pattern above. The Worker indexes new and edited channel posts. The app lists files under the matching course; **Get file** opens the bot with that post's ID. The user must press **Start** in Telegram once, after which the bot sends the requested file privately. The public channel remains available as the archive.

If a file is removed from the channel, remove its catalog entry by deleting its KV key named `file:<message_id>` in the Cloudflare dashboard. Telegram does not send bots a channel-post deletion update.

## Worker configuration reference

- `CHANNEL_ID` in `telegram-worker/wrangler.toml`: public channel username, including the leading `@`.
- `FILES` in `telegram-worker/wrangler.toml`: Cloudflare KV binding for the catalog.
- `BOT_TOKEN` Worker secret: token from BotFather.
- `WEBHOOK_SECRET` Worker secret: value used when registering the Telegram webhook.
- `apiBaseUrl`, `botUsername`, and `channelUsername` in `telegram-config.js`: public settings consumed by the app and web page.
