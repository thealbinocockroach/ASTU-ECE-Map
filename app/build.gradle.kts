plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "edu.campusece"
    compileSdk = 35

    defaultConfig {
        applicationId = "edu.campusece"
        minSdk = 26
        targetSdk = 35
        versionCode = 2
        versionName = "1.0.4"
    }

    signingConfigs {
        getByName("debug") {
            val keystore = System.getenv("APK_SIGNING_KEYSTORE")
            if (!keystore.isNullOrBlank()) {
                storeFile = file(keystore)
                storePassword = System.getenv("APK_SIGNING_STORE_PASSWORD")
                keyAlias = System.getenv("APK_SIGNING_KEY_ALIAS")
                keyPassword = System.getenv("APK_SIGNING_KEY_PASSWORD")
            }
        }
    }

    kotlinOptions {
        jvmTarget = "1.8"
    }
}
