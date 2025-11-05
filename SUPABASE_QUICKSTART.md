# Supabase Quick Start - 5 Minutes Setup ⚡

Get your PowerUp waitlist up and running with Supabase in just 5 minutes!

## 🚀 Quick Setup (5 steps)

### Step 1: Create Supabase Project (1 min)
1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Enter project name: `powerup-landing`
4. Choose a strong database password
5. Select your region
6. Click "Create new project" (wait ~2 minutes)

### Step 2: Create Database Table (1 min)
1. In Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy and paste this SQL:

```sql
-- Create waitlist table with all necessary fields and security
CREATE TABLE waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_waitlist_email ON waitlist(email);
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at DESC);

-- Enable security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to join waitlist (insert only)
CREATE POLICY "Anyone can join waitlist" ON waitlist
    FOR INSERT TO anon WITH CHECK (true);

-- Only authenticated users can view waitlist
CREATE POLICY "Authenticated can view" ON waitlist
    FOR SELECT TO authenticated USING (true);
```

4. Click "Run" ✅

### Step 3: Get Your API Keys (30 seconds)
1. Go to **Settings** > **API**
2. Copy these two values:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbG...` (long string)

### Step 4: Update Your Code (1 min)
1. Open `index.html`
2. Find lines ~850 (Supabase Configuration):

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

3. Replace with your actual values:

```javascript
const SUPABASE_URL = 'https://xxxxx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

### Step 5: Deploy & Test (1 min)
1. Save and deploy your `index.html`
2. Visit your landing page
3. Test the waitlist form with your email
4. Check Supabase dashboard > **Table Editor** > `waitlist` table
5. You should see your email! 🎉

## ✅ That's it! You're done!

Your waitlist is now:
- ✨ Storing emails in a real database
- 🔒 Protected with security policies
- 🚫 Preventing duplicates automatically
- ⚡ Production-ready and scalable

## 📊 View Your Waitlist

**Via Dashboard:**
- Supabase Dashboard > Table Editor > `waitlist` table

**Via API (for integrations):**
```javascript
const { data } = await supabase
  .from('waitlist')
  .select('*')
  .order('created_at', { ascending: false });
```

## 🔧 Troubleshooting

### Form says "not configured yet"
- Check that you replaced BOTH `YOUR_SUPABASE_URL` AND `YOUR_SUPABASE_ANON_KEY`
- Make sure there are no typos in the values

### "Policy violation" error
- Run the SQL from Step 2 again
- Make sure RLS policies were created

### Emails not appearing in table
- Check browser console for errors (F12)
- Verify your anon key is correct
- Check that the table name is exactly `waitlist`

## 🎯 Next Steps (Optional)

1. **Email Notifications**: Set up webhooks to get notified of new signups
2. **Export Data**: Download your waitlist as CSV from Supabase
3. **Analytics**: Track signup events with Google Analytics
4. **Admin Dashboard**: Create a protected page to manage waitlist

## 📚 Full Documentation

For detailed setup, security notes, and advanced features, see:
- `supabase-setup.md` - Complete setup guide
- `config.example.js` - Configuration template
- `.env.example` - Environment variables

## 💡 Pro Tips

- **Backup your keys**: Save them somewhere safe
- **Test first**: Try the form yourself before sharing
- **Monitor usage**: Check Supabase dashboard for signup trends
- **Export regularly**: Download your waitlist data as backup

## 🆘 Need Help?

- [Supabase Docs](https://supabase.com/docs)
- [Supabase Discord](https://discord.supabase.com)
- Create an issue in this repo

---

Made with ❤️ for PowerUp
