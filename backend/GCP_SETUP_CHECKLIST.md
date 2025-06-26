# GCP/Firebase Setup Checklist for PettyCash Plus

## 🔧 Required Console Setup

### 1. Enable Firebase in GCP Console
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Select your existing GCP project "pettycash-plus"
4. Follow the wizard to enable Firebase

### 2. Enable Required APIs in GCP Console
Go to [APIs & Services](https://console.cloud.google.com/apis/dashboard?project=pettycash-plus) and enable:

- [ ] **Firebase Authentication API**
- [ ] **Cloud Firestore API**
- [ ] **Cloud Storage API**
- [ ] **Cloud Functions API**
- [ ] **Cloud Vision API** (for receipt OCR)
- [ ] **Vertex AI API** (for Gemini)

### 3. Firebase Console Setup
In [Firebase Console](https://console.firebase.google.com/project/pettycash-plus/overview):

#### Authentication
1. Go to Authentication → Sign-in method
2. Enable **Email/Password** provider
3. Add your domain to Authorized domains

#### Firestore Database
1. Go to Firestore Database
2. Click "Create database"
3. Choose **Production mode**
4. Select location: **europe-west2** (London) or your preferred region

#### Storage
1. Go to Storage
2. Click "Get started"
3. Choose same region as Firestore
4. Start in production mode

### 4. Create Service Account (for local development)
1. Go to [Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts?project=pettycash-plus)
2. Create new service account:
   - Name: `pettycash-plus-dev`
   - Role: `Firebase Admin SDK Administrator Service Agent`
3. Create key (JSON format)
4. Download and save as `serviceAccountKey.json` in `backend/functions/`
5. Add to `.gitignore`: `serviceAccountKey.json`

### 5. Get Gemini API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create new API key
3. Save for later use in `.env` file

### 6. Set up Billing
1. Ensure billing is enabled on your GCP project
2. Set up budget alerts if desired

## 🚀 Next Steps

Once all items are checked:
1. Run `npm run serve` in `backend/functions` to start emulators
2. Deploy to Firebase: `firebase deploy`

## 📝 Notes
- Project ID: `pettycash-plus`
- Project Number: `898071918433`
- Make sure to use the same region for all services for best performance 