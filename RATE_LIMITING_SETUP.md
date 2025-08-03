# Rate Limiting Setup Guide

This document explains how to set up the daily rate limiting system for Igor AI chat.

## Overview

The system enforces a limit of **20 questions per user per day**. The limit resets at midnight UTC.

## Features

- ✅ **Daily Question Limit**: 20 questions per user per day
- ✅ **Usage Tracking**: Real-time display of remaining questions
- ✅ **Rate Limit Enforcement**: API blocks requests when limit reached
- ✅ **User-Friendly UI**: Clear indicators and messages
- ✅ **Admin Reset**: API endpoint to reset user limits
- ✅ **Firestore Integration**: Persistent storage of usage data

## Required Environment Variables

Add these to your `.env.local` file and Vercel environment variables:

```bash
# Firebase Service Account (for server-side operations)
FIREBASE_SERVICE_ACCOUNT_KEY='{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "...",
  "private_key": "...",
  "client_email": "...",
  "client_id": "...",
  "auth_uri": "...",
  "token_uri": "...",
  "auth_provider_x509_cert_url": "...",
  "client_x509_cert_url": "..."
}'

# Admin key for resetting user limits
ADMIN_KEY=your-secret-admin-key-here
```

## Firebase Service Account Setup

1. Go to Firebase Console → Project Settings → Service Accounts
2. Click "Generate new private key"
3. Download the JSON file
4. Copy the entire JSON content into `FIREBASE_SERVICE_ACCOUNT_KEY` (as a string)

## Firestore Collections

The system creates the following collection:

### `user_usage`
- **Document ID**: `{userId}_{YYYY-MM-DD}`
- **Fields**:
  - `userId` (string): Firebase user ID
  - `date` (string): Date in YYYY-MM-DD format
  - `questionCount` (number): Number of questions asked
  - `lastQuestionAt` (timestamp): Last question timestamp

## API Endpoints

### Chat API (`/api/chat`)
- **Rate Limited**: Yes (20 questions/day)
- **Response includes**: Usage stats
- **Status 429**: When limit reached

### Usage Stats (`/api/usage`)
- **Method**: GET
- **Auth**: Required
- **Returns**: Current usage stats

### Admin Reset (`/api/admin/reset-limit`)
- **Method**: POST
- **Auth**: Admin key required
- **Body**: `{ "adminKey": "...", "userId": "..." }`

## UI Components

### Header Display
- Shows remaining questions
- Color-coded status (green/yellow/red)
- Usage counter (X/20 used today)

### Input Section
- Disabled when limit reached
- Shows remaining questions counter
- Rate limit reached message

### Rate Limit Messages
- Automatic message from Igor when limit reached
- Clear instructions about reset time
- User-friendly explanations

## Testing

### Test Rate Limiting
1. Ask 20 questions in the chat
2. Verify the 21st question is blocked
3. Check UI shows "Limit Reached"

### Reset User Limit (Admin)
```bash
curl -X POST http://localhost:3000/api/admin/reset-limit \
  -H "Content-Type: application/json" \
  -d '{"adminKey": "your-admin-key", "userId": "firebase-user-id"}'
```

## Production Deployment

1. Add all environment variables to Vercel
2. Ensure Firebase Service Account has proper permissions
3. Test rate limiting in production
4. Monitor Firestore usage for costs

## Security Notes

- Firebase Admin SDK runs server-side only
- User tokens are verified before rate limit checks
- Admin endpoints require secret key
- Firestore rules should restrict client access to user_usage collection

## Monitoring

- Check Vercel logs for rate limiting activity
- Monitor Firestore usage in Firebase Console
- Track user engagement patterns
- Consider analytics for question patterns

## Future Enhancements

- [ ] Weekly/monthly limits
- [ ] Premium user higher limits  
- [ ] Rate limit per conversation
- [ ] Analytics dashboard
- [ ] Email notifications for limit reached