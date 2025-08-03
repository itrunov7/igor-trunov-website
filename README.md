# Igor Trunov Personal Website with AI Chat

A modern, polished web application representing Igor Trunov, a 38-year-old Russian entrepreneur living in Dubai. The site features beautiful Apple-inspired design with an AI chat interface powered by OpenAI GPT-4.

## Features

- **Modern Design**: Apple-inspired minimalistic design with clean typography and smooth transitions
- **Authentication**: Secure user authentication with Google OAuth via NextAuth.js
- **AI Chat Interface**: Chat with Igor AI powered by OpenAI GPT-4 and Igor's knowledge base
- **Responsive Layout**: Mobile-first design that works on all devices
- **Content Management**: Static pages for About, Projects, Articles, and Profile
- **Knowledge Base Integration**: AI responses based on Igor's biography, philosophy, and expertise

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js with Google OAuth
- **AI Integration**: OpenAI GPT-4 API
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- OpenAI API key
- Google OAuth credentials (for authentication)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd igor-trunov-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Copy `.env.local` and update with your actual values:
   ```bash
   # OpenAI Configuration
   OPENAI_API_KEY=your-openai-api-key

   # NextAuth Configuration
   NEXTAUTH_SECRET=your-nextauth-secret-key-here
   NEXTAUTH_URL=http://localhost:3000

   # Google OAuth (Get from Google Cloud Console)
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret

   # App Configuration
   APP_URL=http://localhost:3000
   ```

4. **Set up Google OAuth**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add `http://localhost:3000/api/auth/callback/google` to authorized redirect URIs
   - Copy Client ID and Client Secret to `.env.local`

5. **Run the development server**:
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## Project Structure

```
src/
├── app/
│   ├── about/page.tsx          # About Igor page
│   ├── articles/page.tsx       # Articles and insights
│   ├── auth/
│   │   ├── signin/page.tsx     # Sign in page
│   │   └── signup/page.tsx     # Sign up redirect
│   ├── chat/page.tsx           # AI chat interface
│   ├── profile/page.tsx        # User profile
│   ├── projects/page.tsx       # Atlantix projects
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts  # NextAuth configuration
│   │   └── chat/route.ts       # Chat API endpoint
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout with navbar/footer
│   ├── page.tsx                # Home page
│   └── providers.tsx           # NextAuth session provider
├── components/
│   └── layout/
│       ├── Navbar.tsx          # Navigation component
│       └── Footer.tsx          # Footer component
├── lib/
│   └── firebase.ts             # Firebase configuration (optional)
├── types/
│   └── next-auth.d.ts          # NextAuth type extensions
└── data/
    └── igor_trunov_knowledge.md # Igor's knowledge base
```

## Key Features Explained

### AI Chat Interface

The chat interface (`/chat`) provides:
- Real-time conversation with Igor AI
- Apple Messages-style design
- Conversation history (UI ready, backend storage needed)
- Error handling and loading states
- Mobile-responsive design

### Knowledge Base Integration

Igor AI responses are powered by:
- Comprehensive knowledge base in `data/igor_trunov_knowledge.md`
- OpenAI GPT-4 with custom system prompts
- First-person responses as Igor Trunov
- Focus on leadership, innovation, and entrepreneurship

### Authentication Flow

- Google OAuth integration via NextAuth.js
- Protected routes (chat, profile)
- Session management
- User profile with placeholder chat history

### Content Pages

- **Home**: Hero section with call-to-action for AI chat
- **About**: Detailed biography, philosophy, and management style
- **Projects**: Atlantix innovation factory and focus areas
- **Articles**: Searchable articles with categories and excerpts
- **Profile**: User information and chat history (placeholder)

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key for GPT-4 | Yes |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js sessions | Yes |
| `NEXTAUTH_URL` | Base URL for NextAuth callbacks | Yes |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | Yes |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | Yes |
| `APP_URL` | Application base URL | No |

## Deployment

### Vercel (Recommended)

1. **Push to GitHub** and connect repository to Vercel
2. **Add environment variables** in Vercel dashboard
3. **Update OAuth redirect URIs** to production domain
4. **Deploy**: Vercel will automatically deploy on push

### Other Platforms

The app is a standard Next.js application and can be deployed to:
- Netlify
- Railway
- DigitalOcean App Platform
- Any platform supporting Node.js

## Customization

### Adding New Content

1. **Articles**: Add to `articles/page.tsx` articles array
2. **Knowledge Base**: Update `data/igor_trunov_knowledge.md`
3. **Projects**: Modify `projects/page.tsx` focus areas
4. **About**: Update content in `about/page.tsx`

### Styling

- Uses Tailwind CSS for all styling
- Apple-inspired design principles
- Responsive breakpoints
- Custom CSS utilities in `globals.css`

### AI Responses

Customize Igor's AI personality by:
- Updating the knowledge base file
- Modifying system prompts in `api/chat/route.ts`
- Adjusting OpenAI parameters (temperature, max_tokens)

## API Endpoints

### `/api/chat` (POST)

Chat with Igor AI

**Request**:
```json
{
  "message": "How do you approach team building?",
  "conversationHistory": [...]
}
```

**Response**:
```json
{
  "response": "In my experience, team building starts with...",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### `/api/auth/[...nextauth]`

NextAuth.js authentication endpoints

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add/update tests if needed
5. Submit a pull request

## License

This project is proprietary and belongs to Igor Trunov.

## Support

For questions or support, please contact [contact@igortrunov.com](mailto:contact@igortrunov.com).
