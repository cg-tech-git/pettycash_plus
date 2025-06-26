# Gemini API Setup Guide

## Getting Your Gemini API Key

### 1. Visit Google AI Studio
Go to: https://makersuite.google.com/app/apikey

### 2. Create API Key
- Click "Create API key"
- Select your Google Cloud project: `pettycash-plus`
- Click "Create API key in existing project"
- Copy the generated API key

### 3. Update Your Environment
Edit `backend/functions/.env` and replace `YOUR_GEMINI_API_KEY_HERE` with your actual key:

```bash
GEMINI_API_KEY=your_actual_api_key_here
```

### 4. Test the API Key
You can test if your API key works with this curl command:

```bash
curl -X POST \
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [{
      "parts": [{
        "text": "Hello, Gemini!"
      }]
    }]
  }'
```

## Usage in PettyCash Plus

The Gemini API will be used for:

1. **Intelligent Categorization**
   - Analyze receipt vendor and items
   - Suggest appropriate expense categories
   
2. **Anomaly Detection**
   - Compare expenses against patterns
   - Flag unusual spending
   
3. **Expense Assistant**
   - Natural language queries about expenses
   - Conversational interface for users

## API Limits

With the free tier, you get:
- 1,500 requests per day
- 32,000 tokens per minute
- 1 million tokens per month

This should be sufficient for development and testing.

## Security Note

⚠️ **Never commit your API key to Git!**
- The `.env` file is already in `.gitignore`
- Always use environment variables
- Rotate keys regularly in production 