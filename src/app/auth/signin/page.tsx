'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MessageSquare, Users, Shield, Chrome } from 'lucide-react';
import Link from 'next/link';

export default function SignIn() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { user, signInWithGoogle } = useAuth();

  useEffect(() => {
    // Check if user is already signed in
    if (user) {
      router.push('/chat');
    }
  }, [user, router]);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      router.push('/chat');
    } catch (error) {
      console.error('Sign in failed:', error);
      if (error instanceof Error && error.message.includes('Firebase not configured')) {
        alert('Firebase authentication is not yet configured. Please set up your Firebase credentials in the .env.local file.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Sign In Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-600">
                Sign in to access Igor AI and start your conversation
              </p>
            </div>

            <div className="space-y-6">
              <button
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin mr-3"></div>
                ) : (
                  <Chrome className="w-5 h-5 mr-3" />
                )}
                {isLoading ? 'Signing in...' : 'Continue with Google'}
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Don&apos;t have an account? 
                  <Link href="/auth/signup" className="ml-1 text-blue-600 hover:text-blue-700 font-medium">
                    Sign up here
                  </Link>
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-4">
                  By signing in, you agree to our{' '}
                  <Link href="/terms" className="text-blue-600 hover:text-blue-700">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-blue-600 hover:text-blue-700">
                    Privacy Policy
                  </Link>
                </p>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-gray-900 flex items-center justify-center space-x-1"
                >
                  <span>← Back to Home</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Chat with Igor AI
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Get personalized insights from Igor Trunov&apos;s experience in entrepreneurship, 
                innovation, and technology leadership.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Personal AI Assistant
                  </h4>
                  <p className="text-gray-600">
                    Chat with an AI trained on Igor&apos;s knowledge, philosophy, and experience. 
                    Get answers as if you&apos;re talking directly to Igor.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Leadership Insights
                  </h4>
                  <p className="text-gray-600">
                    Learn about people-first leadership, delegation strategies, and building 
                    high-performing teams from real experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Secure & Private
                  </h4>
                  <p className="text-gray-600">
                    Your conversations are private and secure. We use industry-standard 
                    security measures to protect your data.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-2">What you can ask:</h4>
              <ul className="space-y-1 text-blue-100">
                <li>• Leadership and management strategies</li>
                <li>• Innovation and entrepreneurship advice</li>
                <li>• AI and technology insights</li>
                <li>• Building and scaling teams</li>
                <li>• Strategic decision making</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 