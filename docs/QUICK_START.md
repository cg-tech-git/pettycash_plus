# Quick Start Guide

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/cg-tech-git/pettycash_plus.git
cd pettycash_plus
```

### 2. Set Up Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project named "pettycash-plus"
3. Enable the following services:
   - Authentication (Email/Password)
   - Firestore Database
   - Cloud Storage
   - Cloud Functions
4. Download the configuration files:
   - `google-services.json` for Android
   - `GoogleService-Info.plist` for iOS
   - Firebase config for web

### 3. Set Up Google Cloud
1. Enable the following APIs:
   - Cloud Vision API
   - Vertex AI API (for Gemini)
2. Create a service account and download credentials
3. Get your Gemini API key

### 4. Configure Environment
```bash
cp .env.example .env
# Edit .env with your configuration values
```

### 5. Install Dependencies

#### Backend
```bash
cd backend
npm install
```

#### Web
```bash
cd ../web
npm install
```

#### Mobile
```bash
cd ../mobile
flutter pub get
```

### 6. Run Development Servers

#### Backend (Firebase Emulator)
```bash
cd backend
npm run serve
```

#### Web
```bash
cd web
npm start
```

#### Mobile
```bash
cd mobile
flutter run
```

## 📱 Mobile Development Notes

- Ensure you have Flutter SDK installed
- For iOS development, you need Xcode
- For Android development, you need Android Studio
- Place Firebase configuration files in:
  - `mobile/android/app/google-services.json`
  - `mobile/ios/Runner/GoogleService-Info.plist`

## 🌐 Web Development Notes

- React development server runs on http://localhost:3000
- Tailwind CSS is pre-configured
- Firebase configuration goes in `web/src/config/firebase.ts`

## ☁️ Backend Development Notes

- Firebase Emulator UI available at http://localhost:4000
- Cloud Functions run locally on http://localhost:5001
- Use TypeScript for all functions

## Next Steps

1. Set up Firebase project and get configuration
2. Start with backend API development
3. Build authentication flow
4. Implement core features incrementally 