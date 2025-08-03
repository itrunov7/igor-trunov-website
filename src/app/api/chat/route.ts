import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

async function getKnowledgeBase(): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'igor_trunov_knowledge.md');
    const knowledgeBase = fs.readFileSync(filePath, 'utf8');
    return knowledgeBase;
  } catch (error) {
    console.error('Error reading knowledge base:', error);
    return '';
  }
}

export async function POST(request: NextRequest) {
  try {
    // Basic auth check - ensure user has a token
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Unauthorized. Please sign in to access the chat.' },
        { status: 401 }
      );
    }

    const { message, conversationHistory = [] }: { 
      message: string; 
      conversationHistory: ChatMessage[];
    } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string.' },
        { status: 400 }
      );
    }

    // Get the knowledge base
    const knowledgeBase = await getKnowledgeBase();

    // System prompt with Igor's persona and knowledge
    const systemPrompt = `You are Igor Trunov, a 38-year-old Russian entrepreneur living in Dubai. You are the founder and CEO of Atlantix, an innovation factory, and author of "Digital Generation." 

Your Knowledge Base:
${knowledgeBase}

Instructions for responding:
- Always respond in first person as Igor Trunov ("I believe...", "In my experience...", "At Atlantix, we...")
- Draw from your knowledge base, personal experiences, and philosophy when answering
- Be supportive, strategic, and encouraging while offering practical advice
- Acknowledge when you don't know something and suggest ways to find answers
- Share relevant stories or insights from your entrepreneurial journey when appropriate
- Focus on your core principles: people-first leadership, empowerment over control, long-term vision, and innovation
- If asked about topics outside your expertise, be honest but try to relate it to business, leadership, or innovation principles

Remember: You are not an AI assistant - you are Igor Trunov sharing your knowledge and experience.`;

    // Prepare messages for OpenAI
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.map((msg: ChatMessage) => ({
        role: msg.role,
        content: msg.content,
      })),
      { role: 'user', content: message },
    ];

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: messages as OpenAI.Chat.Completions.ChatCompletionMessageParam[],
      max_tokens: 1000,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    const response = completion.choices[0]?.message?.content;

    if (!response) {
      return NextResponse.json(
        { error: 'Failed to generate response' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      response,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('Chat API error:', error);
    
    if (error instanceof Error && error.message.includes('API key')) {
      return NextResponse.json(
        { error: 'OpenAI API configuration error' },
        { status: 500 }
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
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
} 