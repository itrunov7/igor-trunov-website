import { adminDb, adminAuth } from './firebase-admin';

const DAILY_QUESTION_LIMIT = 20;

interface UserUsage {
  userId: string;
  date: string; // YYYY-MM-DD format
  questionCount: number;
  lastQuestionAt: Date;
}

/**
 * Get today's date in YYYY-MM-DD format
 */
function getTodayString(): string {
  return new Date().toISOString().split('T')[0];
}

/**
 * Get or create user usage document for today
 */
async function getUserUsageDoc(userId: string): Promise<UserUsage> {
  const today = getTodayString();
  const docId = `${userId}_${today}`;
  
  const docRef = adminDb.collection('user_usage').doc(docId);
  const doc = await docRef.get();
  
  if (doc.exists) {
    return doc.data() as UserUsage;
  } else {
    // Create new usage document for today
    const newUsage: UserUsage = {
      userId,
      date: today,
      questionCount: 0,
      lastQuestionAt: new Date(),
    };
    
    await docRef.set(newUsage);
    return newUsage;
  }
}

/**
 * Check if user has reached daily question limit
 */
export async function checkRateLimit(authToken: string): Promise<{
  allowed: boolean;
  remainingQuestions: number;
  resetTime: string;
  userId?: string;
}> {
  try {
    // Verify the Firebase token and get user ID
    const decodedToken = await adminAuth.verifyIdToken(authToken);
    const userId = decodedToken.uid;
    
    // Get today's usage
    const usage = await getUserUsageDoc(userId);
    
    const remainingQuestions = Math.max(0, DAILY_QUESTION_LIMIT - usage.questionCount);
    const allowed = usage.questionCount < DAILY_QUESTION_LIMIT;
    
    // Calculate reset time (tomorrow at midnight UTC)
    const tomorrow = new Date();
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
    tomorrow.setUTCHours(0, 0, 0, 0);
    
    return {
      allowed,
      remainingQuestions,
      resetTime: tomorrow.toISOString(),
      userId,
    };
  } catch (error) {
    console.error('Rate limit check error:', error);
    return {
      allowed: false,
      remainingQuestions: 0,
      resetTime: new Date().toISOString(),
    };
  }
}

/**
 * Increment user's question count for today
 */
export async function incrementQuestionCount(userId: string): Promise<UserUsage> {
  const today = getTodayString();
  const docId = `${userId}_${today}`;
  
  const docRef = adminDb.collection('user_usage').doc(docId);
  
  // Use a transaction to ensure atomic increment
  return await adminDb.runTransaction(async (transaction) => {
    const doc = await transaction.get(docRef);
    
    let usage: UserUsage;
    if (doc.exists) {
      usage = doc.data() as UserUsage;
      usage.questionCount += 1;
      usage.lastQuestionAt = new Date();
    } else {
      usage = {
        userId,
        date: today,
        questionCount: 1,
        lastQuestionAt: new Date(),
      };
    }
    
    transaction.set(docRef, usage);
    return usage;
  });
}

/**
 * Get user's current usage stats
 */
export async function getUserUsageStats(userId: string): Promise<{
  questionsUsed: number;
  questionsRemaining: number;
  resetTime: string;
}> {
  try {
    const usage = await getUserUsageDoc(userId);
    
    const questionsUsed = usage.questionCount;
    const questionsRemaining = Math.max(0, DAILY_QUESTION_LIMIT - questionsUsed);
    
    // Calculate reset time (tomorrow at midnight UTC)
    const tomorrow = new Date();
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
    tomorrow.setUTCHours(0, 0, 0, 0);
    
    return {
      questionsUsed,
      questionsRemaining,
      resetTime: tomorrow.toISOString(),
    };
  } catch (error) {
    console.error('Get usage stats error:', error);
    return {
      questionsUsed: 0,
      questionsRemaining: DAILY_QUESTION_LIMIT,
      resetTime: new Date().toISOString(),
    };
  }
}

/**
 * Admin function to reset user's daily limit (for testing or special cases)
 */
export async function resetUserDailyLimit(userId: string): Promise<boolean> {
  try {
    const today = getTodayString();
    const docId = `${userId}_${today}`;
    
    await adminDb.collection('user_usage').doc(docId).delete();
    return true;
  } catch (error) {
    console.error('Reset daily limit error:', error);
    return false;
  }
}