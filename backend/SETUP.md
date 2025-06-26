# Backend Setup Guide

## 🚀 Quick Start

### 1. Install Firebase CLI
```bash
npm install -g firebase-tools
firebase login
```

### 2. Initialize Firebase Project
```bash
# From the backend directory
cd backend
firebase init

# Select:
# - Functions (TypeScript)
# - Firestore
# - Storage
# - Emulators
```

### 3. Install Dependencies
```bash
cd functions
npm install
npm install --save-dev @types/cors
```

### 4. Set Up Environment Variables
```bash
# In functions directory
cp ../../.env.example .env
# Add your Firebase and Google Cloud credentials
```

### 5. Run Local Development
```bash
# Start Firebase Emulator
npm run serve

# The following services will be available:
# - Functions: http://localhost:5001
# - Firestore: http://localhost:8080
# - Storage: http://localhost:9199
# - Emulator UI: http://localhost:4000
```

## 📁 Project Structure

```
backend/
├── functions/
│   ├── src/
│   │   ├── index.ts         # Main entry point
│   │   ├── auth/           # Authentication logic
│   │   ├── claims/         # Claim management
│   │   ├── ai/            # AI integrations
│   │   ├── middleware/     # Auth & validation
│   │   ├── models/        # TypeScript interfaces
│   │   ├── utils/         # Shared utilities
│   │   └── config/        # Configuration
│   ├── package.json
│   └── tsconfig.json
├── firebase.json          # Firebase configuration
└── firestore.rules       # Security rules
```

## 🔧 Development Workflow

### Creating a New Function
1. Create module in appropriate directory
2. Export from module's index.ts
3. Import in main index.ts
4. Deploy or test locally

### Example Function Structure
```typescript
// functions/src/claims/create.ts
import * as functions from 'firebase-functions';
import { Claim } from '../models';

export const createClaim = functions.https.onCall(async (data, context) => {
  // Validate authentication
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
  }

  // Business logic here
  
  return { success: true, claimId: 'xxx' };
});
```

## 🧪 Testing

### Unit Tests
```bash
npm test
```

### Manual Testing with Emulator
Use the Firebase Emulator UI at http://localhost:4000 to:
- View and edit Firestore data
- Monitor function logs
- Test authentication

### API Testing
Use Postman or similar tools to test HTTP functions.

## 🚢 Deployment

### Deploy to Staging
```bash
firebase use staging
firebase deploy --only functions
```

### Deploy to Production
```bash
firebase use production
firebase deploy --only functions
```

## Next Steps

1. Set up Firebase project in console
2. Configure authentication providers
3. Set up Firestore security rules
4. Implement first auth endpoints
5. Test with Firebase Emulator 