# Supabase Setup Guide for PowerUp Landing Page

This guide will walk you through setting up Supabase for the PowerUp waitlist functionality.

## Prerequisites

- A Supabase account (free tier is sufficient)
- Access to your Supabase project

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign in or create an account
3. Click "New Project"
4. Fill in the project details:
   - Name: `powerup-landing` (or any name you prefer)
   - Database Password: Choose a strong password
   - Region: Select the region closest to your users
5. Click "Create new project" and wait for setup to complete

## Step 2: Create the Waitlist Table

1. In your Supabase dashboard, navigate to the **SQL Editor**
2. Click "New Query"
3. Paste the following SQL:

```sql
-- Create waitlist table
CREATE TABLE waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- Create index on created_at for sorting
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for waitlist signups)
CREATE POLICY "Allow anonymous inserts" ON waitlist
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Create policy to allow authenticated users to view all records
CREATE POLICY "Allow authenticated users to view" ON waitlist
    FOR SELECT
    TO authenticated
    USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_waitlist_updated_at
    BEFORE UPDATE ON waitlist
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
```

4. Click "Run" to execute the query
5. You should see a success message

## Step 3: Get Your API Credentials

1. In your Supabase dashboard, go to **Settings** > **API**
2. Copy the following values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon public** key (under "Project API keys")

## Step 4: Configure the Landing Page

1. Open `index.html` in your code editor
2. Find the Supabase configuration section (around line 850):

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

3. Replace with your actual credentials:

```javascript
const SUPABASE_URL = 'https://xxxxx.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key-here';
```

## Step 5: Deploy and Test

1. Deploy your updated `index.html` to your hosting platform
2. Open your landing page
3. Try submitting an email to the waitlist
4. Check your Supabase dashboard:
   - Go to **Table Editor**
   - Select the `waitlist` table
   - You should see your email entry

## Optional: Set Up Email Notifications

You can configure Supabase to send you notifications when someone joins the waitlist:

1. Go to **Database** > **Webhooks**
2. Click "Create a new webhook"
3. Configure:
   - Name: `Waitlist Notification`
   - Table: `waitlist`
   - Events: `INSERT`
   - Webhook URL: Your notification endpoint (e.g., Zapier, Make.com, or custom endpoint)

## Viewing Your Waitlist

### Via Supabase Dashboard
1. Go to **Table Editor**
2. Select `waitlist` table
3. View all entries with timestamps

### Via API (for integrations)
You can query the waitlist using the Supabase client:

```javascript
const { data, error } = await supabase
  .from('waitlist')
  .select('*')
  .order('created_at', { ascending: false });
```

## Security Notes

- ✅ Row Level Security (RLS) is enabled
- ✅ Anonymous users can only INSERT (join waitlist)
- ✅ Email uniqueness is enforced
- ✅ Authenticated users need to be explicitly granted to view data
- ⚠️ Never expose your `service_role` key in frontend code
- ⚠️ The `anon` key is safe to use in public frontend code

## Troubleshooting

### "Supabase client not initialized"
- Check that you've replaced the placeholder credentials with your actual values
- Ensure there are no typos in your URL or API key

### "duplicate key value violates unique constraint"
- This is expected behavior when someone tries to sign up twice
- The error is caught and shown as "You're already on the waitlist!"

### Emails not being saved
- Check the browser console for errors
- Verify RLS policies are set correctly
- Ensure the `anon` key has INSERT permissions

## Next Steps

1. **Email Confirmation**: Set up Supabase Auth or a third-party service to send confirmation emails
2. **Admin Dashboard**: Create a protected admin page to view and manage waitlist entries
3. **Analytics**: Integrate with Google Analytics or Plausible to track signups
4. **Export**: Use Supabase's export features to download your waitlist as CSV

## Support

For Supabase-specific questions:
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Discord](https://discord.supabase.com)

For PowerUp landing page questions:
- Create an issue in the GitHub repository
