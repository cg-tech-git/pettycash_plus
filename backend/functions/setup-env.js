const fs = require('fs');
const path = require('path');

const envContent = `# Google Cloud Project Configuration
GOOGLE_APPLICATION_CREDENTIALS=./serviceAccountKey.json
GCP_PROJECT_ID=pettycash-plus

# Gemini API Configuration
GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE

# Environment
NODE_ENV=development

# Cloud Storage Bucket
STORAGE_BUCKET=pettycash-plus.appspot.com

# Function URLs (for local development)
FUNCTIONS_EMULATOR_HOST=http://localhost:5001
`;

const envPath = path.join(__dirname, '.env');

if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env file');
  console.log('⚠️  Please update GEMINI_API_KEY in .env file');
  console.log('   Get your key from: https://makersuite.google.com/app/apikey');
} else {
  console.log('⚠️  .env file already exists');
} 