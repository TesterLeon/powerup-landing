/**
 * PowerUp Landing Page - Configuration Example
 * 
 * This file contains example configuration for the Supabase integration.
 * Copy these values into index.html and replace with your actual credentials.
 */

// Supabase Configuration
const SUPABASE_CONFIG = {
  // Your Supabase project URL
  // Example: 'https://abcdefghijklmnop.supabase.co'
  url: 'YOUR_SUPABASE_URL',
  
  // Your Supabase anonymous/public API key
  // This is safe to use in frontend code as it has limited permissions
  // Example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
  anonKey: 'YOUR_SUPABASE_ANON_KEY',
};

/**
 * Where to find these values:
 * 
 * 1. Go to your Supabase project dashboard
 * 2. Navigate to Settings > API
 * 3. Copy the "Project URL" for the url field
 * 4. Copy the "anon public" key for the anonKey field
 * 
 * Security Notes:
 * - The anon key is safe to expose in frontend code
 * - Never expose your service_role key in frontend code
 * - Row Level Security (RLS) policies protect your data
 * - The anon key only has INSERT permission on the waitlist table
 */

/**
 * Environment-specific configuration:
 * 
 * For development:
 * - Use your development Supabase project
 * 
 * For production:
 * - Use your production Supabase project
 * - Consider using environment variables if deploying via:
 *   - Netlify: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
 *   - Vercel: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
 *   - GitHub Pages: Use GitHub Secrets and build-time replacement
 */

/**
 * Database Schema:
 * 
 * The waitlist table should have the following structure:
 * 
 * CREATE TABLE waitlist (
 *   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *   email TEXT NOT NULL UNIQUE,
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 *   updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
 * );
 * 
 * See supabase-setup.md for complete setup instructions.
 */
