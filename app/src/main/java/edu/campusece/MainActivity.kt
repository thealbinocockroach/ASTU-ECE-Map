package edu.campusece

import android.app.Activity
import android.content.Intent
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.view.View
import android.view.WindowInsets
import android.view.ViewGroup
import android.widget.FrameLayout
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.webkit.WebViewClient

class MainActivity : Activity() {
    private lateinit var webView: WebView
    private lateinit var insetContainer: FrameLayout
    @Volatile
    private var detailOpen = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            window.setDecorFitsSystemWindows(false)
        }

        insetContainer = FrameLayout(this).apply {
            setBackgroundColor(android.graphics.Color.parseColor("#F4F0E7"))
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
            val fallbackTop = systemBarDimension("status_bar_height", 24)
            val fallbackBottom = systemBarDimension("navigation_bar_height", 24)
            insetContainer.setOnApplyWindowInsetsListener { view, insets ->
                val systemBars = WindowInsets.Type.systemBars() or WindowInsets.Type.displayCutout()
                val safeInsets = insets.getInsets(systemBars)
                view.setPadding(
                    safeInsets.left,
                    maxOf(safeInsets.top, fallbackTop),
                    safeInsets.right,
                    maxOf(safeInsets.bottom, fallbackBottom)
                )
                insets
            }
        }
        insetContainer.addView(
            webView,
            FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
        )
        setContentView(insetContainer)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            insetContainer.requestApplyInsets()
            insetContainer.post {
                insetContainer.rootWindowInsets?.let { insets ->
                    val systemBars = WindowInsets.Type.systemBars() or WindowInsets.Type.displayCutout()
                    val safeInsets = insets.getInsets(systemBars)
                    insetContainer.setPadding(
                        safeInsets.left,
                        maxOf(safeInsets.top, systemBarDimension("status_bar_height", 24)),
                        safeInsets.right,
                        maxOf(safeInsets.bottom, systemBarDimension("navigation_bar_height", 24))
                    )
                }
            }
        }
    }

    private fun systemBarDimension(name: String, fallbackDp: Int): Int {
        val resourceId = resources.getIdentifier(name, "dimen", "android")
        return if (resourceId != 0) {
            resources.getDimensionPixelSize(resourceId)
        } else {
            (fallbackDp * resources.displayMetrics.density + 0.5f).toInt()
        }
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
                insetContainer.setBackgroundColor(color)
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
