import { NextRequest, NextResponse } from 'next/server';
import { resetUserDailyLimit } from '@/lib/rate-limiter';

export async function POST(request: NextRequest) {
  try {
    // Simple admin check - in production you'd want proper admin authentication
    const { adminKey, userId } = await request.json();
    
    // Check for admin key (you can set this in your environment)
    if (adminKey !== process.env.ADMIN_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized - Invalid admin key' },
        { status: 401 }
      );
    }

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const success = await resetUserDailyLimit(userId);

    if (success) {
      return NextResponse.json({
        message: `Daily limit reset successfully for user: ${userId}`,
        userId,
        timestamp: new Date().toISOString(),
      });
    } else {
      return NextResponse.json(
        { error: 'Failed to reset daily limit' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Admin reset limit error:', error);
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
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}