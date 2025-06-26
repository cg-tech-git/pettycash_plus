import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cors from 'cors';

// Initialize Firebase Admin
admin.initializeApp();

// Enable CORS for all origins during development
const corsHandler = cors({ origin: true });

// Re-export all functions from their respective modules
export * from './auth';
export * from './claims';
export * from './ai';

// Health check endpoint
export const health = functions.https.onRequest((req, res) => {
  corsHandler(req, res, () => {
    res.status(200).json({ 
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'pettycash-plus-backend'
    });
  });
}); 