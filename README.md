# propinsight-ai-API
This is a lightweight Express.js backend that simulates an AI-powered property valuation feature.

## Features
- `POST /api/generate-valuation`: Returns a mock property valuation and reasoning.
- `GET /api/area-data?suburb=Observatory`: (Bonus) Returns mock area data.
- Logs each request and AI response to `logs/app.log`.

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Send API requests to `http://localhost:3000/api/`.

### POST `/api/generate-valuation`
Send property details and get a valuation with reasoning using ChatGPT.

**Example Request:**
```json
{
  "suburb": "Observatory, Cape Town",
  "bedrooms": 3,
  "bathrooms": 2,
  "erf_size_sqm": 500,
  "property_type": "Freehold"
}
```
### GET `/api/area-data?suburb=Observatory`
Returns mock or AI-generated statistics about a given suburb using ChatGPT.

## Logs
All inputs and AI responses are logged to `logs/app.log`.
=====================================================================================================
