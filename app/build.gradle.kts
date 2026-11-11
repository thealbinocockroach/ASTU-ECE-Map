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
        versionCode = 1
        versionName = "1.0"
    }

    kotlinOptions {
        jvmTarget = "1.8"
    }
}
