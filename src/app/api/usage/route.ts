import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';
import { getUserUsageStats } from '@/lib/rate-limiter';

export async function GET(request: NextRequest) {
  try {
    // Check authorization
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Unauthorized. Please sign in to access usage stats.' },
        { status: 401 }
      );
    }

    // Extract and verify token
    const token = authHeader.replace('Bearer ', '');
    const decodedToken = await adminAuth.verifyIdToken(token);
    const userId = decodedToken.uid;

    // Get usage stats
    const stats = await getUserUsageStats(userId);

    return NextResponse.json({
      userId,
      questionsUsed: stats.questionsUsed,
      questionsRemaining: stats.questionsRemaining,
      dailyLimit: 20,
      resetTime: stats.resetTime,
      resetTimeFormatted: new Date(stats.resetTime).toLocaleString(),
    });

  } catch (error) {
    console.error('Usage API error:', error);
    
    if (error instanceof Error && error.message.includes('token')) {
      return NextResponse.json(
        { error: 'Invalid authentication token' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}