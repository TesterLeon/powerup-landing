# PowerUp Landing Page 🚀

Modern, sleek landing page for **PowerUp** - an AI-powered PowerPoint slide editor that transforms boring presentations into stunning decks.

## 🌟 Features

- **Modern Design**: Clean, minimal, professional aesthetic with orange (#FF6B35) accents
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Functional Waitlist**: Email capture form with validation and success/error states
- **Smooth Animations**: Subtle scroll animations and hover effects
- **Professional Typography**: Using Inter font for modern, clean text
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🎨 Design Highlights

- White, black, and orange (#FF6B35) color scheme
- Generous whitespace for breathing room
- Gradient backgrounds and subtle shadows for depth
- Orange accent CTAs that pop
- Smooth CSS animations (not overdone)
- Professional SaaS product vibes

## 📋 Sections

1. **Hero** - Problem/Solution statement for PowerUp
2. **How It Works** - 3-step process showing the AI magic
3. **Features** - 6 key benefits of AI slide editing
4. **Waitlist CTA** - "Get Early Access" email capture form
5. **Footer** - Links and copyright

## 🛠️ Tech Stack

- HTML5
- CSS3 (with CSS Grid, Flexbox, and animations)
- Vanilla JavaScript
- Google Fonts (Inter)

## 🚀 Live Demo

Visit the live site at: [https://testerleon.github.io/powerup-landing/](https://testerleon.github.io/powerup-landing/)

## 📦 Setup & Deployment

This site is automatically deployed via GitHub Pages from the `main` branch.

To run locally:
1. Clone the repository
2. Open `index.html` in your browser
3. That's it! No build process needed.

## ✨ Waitlist Functionality

The waitlist form includes:
- Email validation (regex pattern matching)
- Loading state during submission
- Success/error messages
- Duplicate detection
- LocalStorage persistence (in production, connect to your backend API)

To integrate with a backend:
- Replace the `setTimeout` simulation in the form submit handler
- Add your API endpoint for email collection
- Consider adding analytics tracking

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🎯 Performance

- No external dependencies (except Google Fonts)
- Optimized animations using CSS transforms
- Lazy-loaded scroll animations
- Single HTML file for fast loading

## 📄 License

© 2025 PowerUp. All rights reserved.

---

Made with ❤️ for better presentations
