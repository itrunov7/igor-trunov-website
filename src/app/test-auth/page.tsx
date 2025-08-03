'use client';

import { useAuth } from '@/hooks/useAuth';

export default function TestAuth() {
  const { user, loading, signInWithGoogle, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Auth Test</h1>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Loading: {loading ? 'Yes' : 'No'}</p>
          <p className="text-sm text-gray-600 mb-2">
            User: {user ? 'Logged in' : 'Not logged in'}
          </p>
          {user && (
            <div className="text-xs text-gray-500 bg-gray-100 p-2 rounded">
              <p>Email: {user.email}</p>
              <p>Name: {user.displayName}</p>
              <p>ID: {user.uid}</p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          {!user ? (
            <button
              onClick={signInWithGoogle}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Sign In with Google
            </button>
          ) : (
            <button
              onClick={signOut}
              className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 