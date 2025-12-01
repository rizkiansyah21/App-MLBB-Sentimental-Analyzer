
README - MLBB Sentiment Analyzer

Deskripsi Singkat:
MLBB Sentiment Analyzer adalah aplikasi untuk menganalisis sentimen (Positif, Negatif, Netral) dari ulasan Mobile Legends: Bang Bang (MLBB). Aplikasi menggunakan Machine Learning (SVM) dan menampilkan hasil berupa visualisasi (Pie Chart, Bar Chart, Line Chart), statistik, serta riwayat analisis.

Fitur Utama:
1. Input analisis sentimen
2. Visualisasi data interaktif (Pie Chart, Bar Chart, Line Chart)
3. Riwayat analisis
4. UI modern bertema MLBB
5. Build ke Android (APK)

Arsitektur Aplikasi:
src/
  components/
    InputReviewScreen.tsx
    ResultScreen.tsx
    VisualizationScreen.tsx
  styles/
    globals.css
  App.tsx
  main.tsx

Teknologi yang Digunakan:
Frontend:
- React + TypeScript
- Vite
- TailwindCSS
- Recharts
- Lucide React Icons
Mobile:
- Capacitor Android
- Android Studio
- Gradle
Machine Learning:
- SVM + TF-IDF

Instalasi Project:
1. npm install
2. npm run dev
3. npm run build

Build APK Android:
1. npm install @capacitor/android
2. npx cap add android
3. npm run build
4. npx cap copy
5. npx cap sync
6. npx cap open android

Build APK menggunakan Android Studio:
- ./gradlew assembleDebug
- ./gradlew assembleRelease

Catatan untuk Dosen:
Project ini dibuat untuk memenuhi tugas UAS mata kuliah Pak Fajerin dan telah menyertakan semua fitur yang diminta.

Anggota Kelompok:
- Erwin Dwi Wahyudi 236152004
- Agis Adityo Vangka 236152010 	 	
- Rizkiansyah 236151096
- Gusty Erlana Aldiansyah 236151091
