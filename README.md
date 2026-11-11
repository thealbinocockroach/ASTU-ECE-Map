# ECE Map

An Android shell for the five-year Electronics and Communication Engineering curriculum in `ECE_Final_UG_Revised_Curriculum_V1.pdf` (ASTU, November 2024).

## Install on Android

**[Download the latest APK](https://github.com/thealbinocockroach/ASTU-ECE-Map/releases/latest/download/ASTU-ECE-Map-debug.apk)** from the [Releases page](https://github.com/thealbinocockroach/ASTU-ECE-Map/releases). The APK is built automatically for each versioned release.

To install it, download the APK on your Android device, open it, and allow your browser or file manager to install apps when Android prompts you. The app supports Android 8.0 (API 26) and newer. This APK is provided for direct installation; it is not a Play Store listing.

## In this version

- Five-year course map arranged by year, semester, and summer term
- Course codes, titles, credits, ECTS, prerequisites, and elective choices arranged by semester from the revised 2024 curriculum schedule
- Search and year filters
- Collapsible semester sections
- Major elective choices shown as course cards in their semester
- Returns to the same course-list scroll position after opening a course
- Opens course details at the top of the page
- Keeps Android content clear of the status bar, screen cutouts, and navigation bar
- Course detail pages with chapter outlines, outcomes, resources, workloads, and recommended books when provided
- Course support details placed in a separate left column, with book lists collapsed until opened
- Course synopses, learning outcomes, topic outlines, resources, and references transcribed from the revised 2024 curriculum PDF
- Exit Exam preparation guide based on ASTU's 2026 competency framework, with 17 core courses grouped into five weighted themes
- Exam format, time allowance, course competency checklists, reference books, and accessibility guidance
- Course links from the Exit Exam guide return to the original guide position
- Light and dark themes, with the theme choice saved on the device
- Telegram file catalog with private bot delivery and a public channel archive

Course scheduling, course codes, credit hours, ECTS, prerequisites, and major elective groupings follow the supplied ASTU ECE undergraduate curriculum revised in November 2024. Course detail pages use syllabus material from the revised 2024 curriculum PDF; earlier outline source data has been replaced.

The header seal is cropped from the official [ASTU website banner](https://www.astu.edu.et/templates/astu/images/header.jpg).

## Build from source

Open this repository in Android Studio. Install Android SDK 35 if prompted. To build a debug APK from PowerShell, run `.\gradlew.bat assembleDebug`; the output is `app/build/outputs/apk/debug/app-debug.apk`.

## Project layout

See [TELEGRAM_SETUP.md](TELEGRAM_SETUP.md) for creating the public channel, deploying the Cloudflare Worker and Pages site, setting secrets, and connecting the app. The web version is published from the same static assets used by Android.

```text
campus-ece/
├── app/src/main/assets/       # Offline course shell
├── app/src/main/java/         # Android WebView and theme bridge
├── app/src/main/res/          # Theme and launcher icon
├── app/build.gradle.kts
└── settings.gradle.kts
```
