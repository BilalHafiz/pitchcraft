# PitchCraft - AI Startup Pitch Generator

Transform your startup ideas into professional pitches with AI. Generate compelling names, taglines, and investor-ready content in English and Roman Urdu.

## 🚀 Features

- **AI-Powered Generation**: Advanced AI creates professional startup names, taglines, and pitch content
- **Bilingual Support**: Generate content in English and Roman Urdu for diverse audiences
- **Target Audience Analysis**: Define and understand your ideal customers with AI-generated personas
- **Export & Share**: Export to PDF, create shareable links, and present your pitches professionally
- **Secure Authentication**: Built with Supabase Auth for secure user management
- **Modern UI**: Beautiful, responsive design with Tailwind CSS

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend**: Supabase (Authentication, Database, Edge Functions)
- **AI Integration**: Google Gemini API (@google/generative-ai)
- **Storage**: Supabase Storage
- **Deployment**: Vercel (frontend) + Supabase (backend & DB)

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- A Supabase account and project
- A Google Cloud account with Gemini API access
- Git installed

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd pitch-craft
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to your project dashboard
3. Navigate to Settings > API
4. Copy your project URL and anon key
5. Run the SQL schema in your Supabase SQL editor:

```sql
-- Copy and paste the contents of supabase-schema.sql
```

### 4. Set Up Google Gemini API

1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Create a new API key
3. Copy the API key

### 5. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Google Gemini AI Configuration
GEMINI_API_KEY=your_gemini_api_key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
pitch-craft/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages
│   ├── api/               # API routes
│   ├── create/            # Pitch creation page
│   ├── dashboard/         # User dashboard
│   ├── edit/              # Pitch editor
│   └── share/             # Public pitch sharing
├── components/            # React components
├── lib/                   # Utility functions and configurations
│   ├── types.ts          # TypeScript type definitions
│   ├── supabase.ts       # Supabase client configuration
│   ├── gemini.ts         # Gemini AI integration
│   └── utils.ts          # Utility functions
├── public/               # Static assets
└── supabase-schema.sql   # Database schema
```

## 🔧 Configuration

### Supabase Setup

1. **Database Schema**: Run the provided SQL schema in your Supabase SQL editor
2. **Authentication**: Enable email/password authentication in Supabase Auth settings
3. **Row Level Security**: The schema includes RLS policies for data security

### Gemini AI Setup

1. **API Key**: Get your API key from Google AI Studio
2. **Model**: The app uses Gemini 1.5 Pro model
3. **Rate Limits**: Be aware of API rate limits and costs

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_production_supabase_service_role_key
GEMINI_API_KEY=your_production_gemini_api_key
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

## 🎯 Usage

### Creating a Pitch

1. **Sign Up/Login**: Create an account or sign in
2. **Fill the Form**: Provide your startup idea details
3. **Choose Language**: Select English or Roman Urdu
4. **Generate**: Let AI create your professional pitch
5. **Edit & Customize**: Modify the generated content as needed
6. **Export/Share**: Download PDF or share via link

### Features Overview

- **Dashboard**: View all your generated pitches
- **Editor**: Edit and regenerate pitches with AI
- **Sharing**: Create public shareable links
- **Export**: Download pitches as PDF files
- **Bilingual**: Support for English and Roman Urdu

## 🔒 Security

- **Row Level Security**: Supabase RLS ensures users only access their own data
- **API Key Protection**: Environment variables keep sensitive keys secure
- **Authentication**: Secure user authentication with Supabase Auth
- **Data Privacy**: User data is protected and not shared

## 🧪 Testing

### Manual Testing Checklist

- [ ] User registration and login
- [ ] Pitch creation with different languages
- [ ] AI pitch generation
- [ ] Pitch editing and saving
- [ ] PDF export functionality
- [ ] Shareable link generation
- [ ] Responsive design on mobile/desktop

### API Testing

Test the Gemini integration:

```bash
curl -X POST http://localhost:3000/api/generate-pitch \
  -H "Content-Type: application/json" \
  -d '{
    "idea_name": "Test Startup",
    "description": "A test startup idea",
    "industry": "Technology",
    "tone": "formal",
    "language": "en"
  }'
```

## 🐛 Troubleshooting

### Common Issues

1. **Supabase Connection Error**
   - Check your environment variables
   - Verify Supabase project is active
   - Ensure RLS policies are set up correctly

2. **Gemini API Error**
   - Verify your API key is correct
   - Check API quota and billing
   - Ensure the model is available

3. **Authentication Issues**
   - Clear browser cache and cookies
   - Check Supabase Auth settings
   - Verify email confirmation if enabled

### Debug Mode

Enable debug logging by adding to your environment:

```env
NEXT_PUBLIC_DEBUG=true
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues:

1. Check the troubleshooting section
2. Review the Supabase and Gemini documentation
3. Open an issue on GitHub
4. Contact support

## 🎉 Acknowledgments

- Built with Next.js and Supabase
- AI powered by Google Gemini
- UI components with Tailwind CSS
- Icons by Lucide React

---

**Happy Pitching! 🚀**