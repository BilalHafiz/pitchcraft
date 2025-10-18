# PitchCraft Deployment Guide

This guide will help you deploy PitchCraft to production using Vercel and Supabase.

## 🚀 Prerequisites

- GitHub account
- Vercel account
- Supabase account
- Google Cloud account (for Gemini API)

## 📋 Step-by-Step Deployment

### 1. Prepare Your Repository

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial PitchCraft setup"
   git push origin main
   ```

### 2. Set Up Supabase Production

1. **Create a new Supabase project** for production
2. **Run the database schema**:
   - Go to your Supabase dashboard
   - Navigate to SQL Editor
   - Copy and paste the contents of `supabase-schema.sql`
   - Run the SQL

3. **Configure Authentication**:
   - Go to Authentication > Settings
   - Enable email/password authentication
   - Configure your site URL (will be your Vercel domain)

4. **Get your production keys**:
   - Go to Settings > API
   - Copy your project URL and anon key
   - Copy your service role key (keep this secret!)

### 3. Set Up Google Gemini API

1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Create a new API key
3. Copy the API key

### 4. Deploy to Vercel

1. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Environment Variables**:
   In your Vercel project settings, add these environment variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_production_supabase_service_role_key
   GEMINI_API_KEY=your_gemini_api_key
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   ```

3. **Deploy**:
   - Click "Deploy"
   - Wait for the deployment to complete
   - Your app will be available at `https://your-project.vercel.app`

### 5. Update Supabase Configuration

1. **Update Site URL**:
   - Go to Authentication > Settings in Supabase
   - Add your Vercel domain to "Site URL"
   - Add your Vercel domain to "Redirect URLs"

2. **Update CORS settings**:
   - Go to Settings > API
   - Add your Vercel domain to allowed origins

### 6. Test Your Deployment

1. **Visit your deployed app**
2. **Test the flow**:
   - Register a new account
   - Create a pitch
   - Edit the pitch
   - Export to PDF
   - Share the pitch

## 🔧 Production Optimizations

### 1. Environment Variables Security

- Never commit `.env.local` to version control
- Use Vercel's environment variables for production
- Keep service role keys secure

### 2. Database Security

- Row Level Security (RLS) is already configured
- Review and test your RLS policies
- Monitor database usage

### 3. API Rate Limits

- Monitor Gemini API usage
- Set up billing alerts
- Consider implementing rate limiting

### 4. Performance

- Enable Vercel Analytics
- Monitor Core Web Vitals
- Optimize images and assets

## 🐛 Troubleshooting

### Common Issues

1. **Authentication not working**:
   - Check Supabase site URL configuration
   - Verify environment variables
   - Check browser console for errors

2. **Gemini API errors**:
   - Verify API key is correct
   - Check API quota and billing
   - Review error logs in Vercel

3. **Database connection issues**:
   - Verify Supabase URL and keys
   - Check RLS policies
   - Review database logs

### Debug Mode

Add this to your environment variables for debugging:
```
NEXT_PUBLIC_DEBUG=true
```

## 📊 Monitoring

### 1. Vercel Analytics
- Enable Vercel Analytics in your project
- Monitor performance and usage

### 2. Supabase Monitoring
- Check Supabase dashboard for database metrics
- Monitor authentication logs
- Review API usage

### 3. Error Tracking
- Consider adding Sentry for error tracking
- Monitor application logs

## 🔄 Updates and Maintenance

### 1. Database Migrations
- Use Supabase migrations for schema changes
- Test migrations in staging first

### 2. Code Updates
- Push changes to GitHub
- Vercel will automatically redeploy
- Test thoroughly after updates

### 3. Backup Strategy
- Supabase provides automatic backups
- Consider additional backup solutions for critical data

## 🚨 Security Checklist

- [ ] Environment variables are secure
- [ ] RLS policies are properly configured
- [ ] API keys are not exposed in client code
- [ ] Authentication is working correctly
- [ ] HTTPS is enabled (Vercel handles this)
- [ ] Database access is properly restricted

## 📈 Scaling Considerations

### 1. Database Scaling
- Monitor Supabase usage
- Consider upgrading plan if needed
- Optimize queries for performance

### 2. API Scaling
- Monitor Gemini API usage
- Consider caching strategies
- Implement rate limiting if needed

### 3. Application Scaling
- Vercel handles automatic scaling
- Monitor performance metrics
- Consider CDN for static assets

## 🎉 Success!

Your PitchCraft application should now be live and ready for users!

### Next Steps

1. **Test thoroughly** with real users
2. **Monitor performance** and usage
3. **Gather feedback** and iterate
4. **Consider additional features** based on user needs

### Support

If you encounter issues:
1. Check the troubleshooting section
2. Review Vercel and Supabase documentation
3. Check application logs
4. Consider reaching out to the community

---

**Happy Deploying! 🚀**
