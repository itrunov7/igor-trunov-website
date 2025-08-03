'use client';

import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { Send, User, Loader2, AlertCircle } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface UsageStats {
  questionsUsed: number;
  questionsRemaining: number;
  dailyLimit: number;
  resetTime: string;
}

export default function Chat() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usageStats, setUsageStats] = useState<UsageStats | null>(null);
  const [rateLimitReached, setRateLimitReached] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/signin');
    }
  }, [user, loading, router]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Fetch usage stats when user is loaded
  useEffect(() => {
    if (user) {
      fetchUsageStats();
    }
  }, [user]);

  const fetchUsageStats = async () => {
    try {
      const token = await user?.getIdToken();
      const response = await fetch('/api/usage', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const stats = await response.json();
        setUsageStats(stats);
        setRateLimitReached(stats.questionsRemaining <= 0);
      }
    } catch (error) {
      console.error('Error fetching usage stats:', error);
    }
  };

  useEffect(() => {
    // Add welcome message when chat loads
    if (user && messages.length === 0) {
      const welcomeMessage: Message = {
        id: 'welcome',
        role: 'assistant',
        content: `Hello! I'm Igor Trunov. Welcome to our conversation. I'm here to share my experience in entrepreneurship, innovation, and leadership with you. 

Feel free to ask me about:
• Leadership and team building strategies
• Innovation and business development
• AI and technology implementation
• My journey with Atlantix
• Insights from "Digital Generation"
• Any challenges you're facing in your entrepreneurial journey

What would you like to discuss today?`,
        timestamp: new Date().toISOString(),
      };
      setMessages([welcomeMessage]);
    }
  }, [user, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      // Get the user's ID token for authentication
      const token = await user?.getIdToken();
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: userMessage.content,
          conversationHistory: messages.map(msg => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        
        // Handle rate limit specifically
        if (response.status === 429 && errorData.details?.limitReached) {
          setRateLimitReached(true);
          setUsageStats(prev => prev ? {
            ...prev,
            questionsRemaining: 0
          } : null);
          
          const rateLimitMessage: Message = {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: `I'm sorry, but you've reached your daily limit of 20 questions. Your questions will reset tomorrow at midnight UTC. 

Thank you for using Igor AI! I hope our conversations have been helpful. Please come back tomorrow to continue our discussion.`,
            timestamp: new Date().toISOString(),
          };
          
          setMessages(prev => [...prev, rateLimitMessage]);
          return;
        }
        
        throw new Error(errorData.error || 'Failed to send message');
      }

      const data = await response.json();
      
      // Update usage stats if provided
      if (data.usage) {
        setUsageStats(prev => prev ? {
          ...prev,
          questionsUsed: prev.dailyLimit - data.usage.remainingQuestions,
          questionsRemaining: data.usage.remainingQuestions,
        } : {
          questionsUsed: data.usage.dailyLimit - data.usage.remainingQuestions,
          questionsRemaining: data.usage.remainingQuestions,
          dailyLimit: data.usage.dailyLimit,
          resetTime: data.usage.resetTime,
        });
        
        if (data.usage.remainingQuestions <= 0) {
          setRateLimitReached(true);
        }
      }
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: data.timestamp,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      setError(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading chat...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto h-screen flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">IT</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Igor Trunov</h1>
                <p className="text-sm text-gray-500">AI Assistant • Available now</p>
              </div>
            </div>
            
            {/* Usage Stats */}
            {usageStats && (
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    rateLimitReached 
                      ? 'bg-red-100 text-red-800' 
                      : usageStats.questionsRemaining <= 5 
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                  }`}>
                    {rateLimitReached 
                      ? 'Limit Reached' 
                      : `${usageStats.questionsRemaining} questions left`
                    }
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {usageStats.questionsUsed}/{usageStats.dailyLimit} used today
                </p>
                {rateLimitReached && (
                  <p className="text-xs text-red-600 mt-1">
                    Resets at midnight UTC
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${
                message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}>
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">IT</span>
                  </div>
                )}
                {message.role === 'user' && (
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                )}
                <div className="flex flex-col">
                  <div
                    className={`px-4 py-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-900 shadow-sm border border-gray-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                  <p className={`text-xs text-gray-500 mt-1 ${
                    message.role === 'user' ? 'text-right' : 'text-left'
                  }`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-end space-x-2 max-w-xs lg:max-w-md">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">IT</span>
                </div>
                <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                    <span className="text-sm text-gray-500">Igor is typing...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Error Message */}
        {error && (
          <div className="px-6 py-2">
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
              <p className="text-sm text-red-700">{error}</p>
              <button
                onClick={() => setError(null)}
                className="ml-auto text-red-600 hover:text-red-800"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Input */}
        <div className="bg-white border-t border-gray-200 px-6 py-4">
          {rateLimitReached ? (
            <div className="text-center py-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md mx-auto">
                <h3 className="text-lg font-medium text-red-800 mb-2">Daily Limit Reached</h3>
                <p className="text-sm text-red-700 mb-3">
                  You&apos;ve used all 20 questions for today. Your limit will reset at midnight UTC.
                </p>
                <p className="text-xs text-red-600">
                  Thank you for using Igor AI! Please come back tomorrow to continue our conversation.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-end space-x-3">
                <div className="flex-1 relative">
                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => {
                      setInput(e.target.value);
                      adjustTextareaHeight();
                    }}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask Igor about leadership, innovation, or anything..."
                    className="w-full resize-none rounded-2xl border border-gray-300 px-4 py-3 pr-12 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm"
                    rows={1}
                    style={{ minHeight: '44px', maxHeight: '120px' }}
                    disabled={rateLimitReached}
                  />
                </div>
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading || rateLimitReached}
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500">
                  Press Enter to send, Shift+Enter for new line
                </p>
                {usageStats && !rateLimitReached && (
                  <p className="text-xs text-gray-500">
                    {usageStats.questionsRemaining} questions remaining today
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 