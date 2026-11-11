package edu.campusece

import android.app.Activity
import android.content.Intent
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.view.WindowInsets
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.webkit.WebViewClient

class MainActivity : Activity() {
    private lateinit var webView: WebView
    @Volatile
    private var detailOpen = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            window.setDecorFitsSystemWindows(false)
        }

        webView = WebView(this).apply {
            settings.javaScriptEnabled = true
            settings.domStorageEnabled = true
            webChromeClient = WebChromeClient()
            webViewClient = WebViewClient()
            addJavascriptInterface(ThemeBridge(), "Campus")
            setBackgroundColor(android.graphics.Color.TRANSPARENT)
            loadUrl("file:///android_asset/index.html")
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            webView.setOnApplyWindowInsetsListener { view, insets ->
                val systemBars = WindowInsets.Type.systemBars() or WindowInsets.Type.displayCutout()
                val safeInsets = insets.getInsets(systemBars)
                view.setPadding(safeInsets.left, safeInsets.top, safeInsets.right, safeInsets.bottom)
                insets
            }
        }
        setContentView(webView)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) webView.requestApplyInsets()
    }

    inner class ThemeBridge {
        @JavascriptInterface
        fun openTelegram(url: String) {
            val uri = Uri.parse(url)
            if (uri.scheme != "https" || uri.host != "t.me") return
            runOnUiThread {
                startActivity(Intent(Intent.ACTION_VIEW, uri))
            }
        }

        @JavascriptInterface
        fun setDetailOpen(open: Boolean) {
            detailOpen = open
        }

        @JavascriptInterface
        fun setDark(enabled: Boolean) {
            runOnUiThread {
                val color = android.graphics.Color.parseColor(
                    if (enabled) "#202521" else "#F4F0E7"
                )
                window.statusBarColor = color
                window.navigationBarColor = color

                var flags = window.decorView.systemUiVisibility
                flags = if (enabled) {
                    flags and View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR.inv() and
                        View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR.inv()
                } else {
                    flags or View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR or
                        View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR
                }
                window.decorView.systemUiVisibility = flags
            }
        }
    }

    @Deprecated("Deprecated in Android API")
    override fun onBackPressed() {
        if (detailOpen) {
            webView.evaluateJavascript("window.backToCourses()", null)
        } else if (webView.canGoBack()) {
            webView.goBack()
        } else {
            super.onBackPressed()
        }
    }
}
