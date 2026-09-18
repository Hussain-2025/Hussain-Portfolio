# Hussain Asghar - Professional Portfolio Website

A premium, high-contrast personal portfolio website built with a modern frontend stack using **React**, **Vite**, and **Vanilla CSS**.

The website features a custom monochrome theme, custom scroll-reveal animations, responsive device mockups, a staggered interactive social/contact pill button matrix, and a centralized configuration design pattern.

---

## 🚀 Featured SaaS Projects
- **GoRido**: [https://gorido.vercel.app/](https://gorido.vercel.app/) — Full-Stack Car Rental & AI Booking Platform (React 19, Node.js, Express, MongoDB, Gemini API, Razorpay, PDFKit).
- **SynapseAI**: [https://synapseai-lbod.onrender.com/](https://synapseai-lbod.onrender.com/) — Real-Time Multi-Model AI Collaboration Platform (React 19, TypeScript, Socket.IO, Gemini 3.5 Flash streaming, MongoDB Atlas).
- **LinkMind AI**: [https://linkmind-ai.onrender.com/dashboard](https://linkmind-ai.onrender.com/dashboard) — AI URL Shortener & Realtime Analytics Platform (TypeScript, React 19, Redis caching, Socket.IO, Gemini AI).
- **MeetMind AI**: [https://meetmind-sigma.vercel.app/](https://meetmind-sigma.vercel.app/) — AI Meeting Notes & Task Manager SaaS (React, TypeScript, Gemini AI, Socket.IO, RBAC, Cloudinary).

---

## 🛠️ Technical Stack
- **Core Framework**: React.js
- **Build System & Bundler**: Vite (Fast HMR & lightweight production bundles)
- **Styling Engine**: Bespoke Vanilla CSS variables (custom high-contrast monochrome design system)
- **Icons Library**: Lucide React & Custom SVGs
- **Hosting Target**: Vercel

---

## 📂 Project Directory Structure

```bash
├── public/
│   ├── favicon.svg      # Tab icon
│   ├── logo.jpeg        # Logo branding
│   ├── hero-video.mp4   # Introduction video
│   └── resume.pdf       # Professional PDF resume
├── src/
│   ├── assets/          # Static layout assets
│   ├── components/
│   │   ├── BrandIcons.jsx      # Custom inline SVG brand vectors (GitHub, LinkedIn, LeetCode, etc.)
│   │   └── ClientEffects.jsx   # Scroll reveal, loaders & navbar handlers
│   ├── data/
│   │   └── portfolio.js        # Central portfolio data configurations
│   ├── App.jsx          # Main layout coordinator
│   ├── index.css        # Bespoke styling and variable systems
│   └── main.jsx         # App mounting entrypoint
├── index.html           # Main entry HTML template
├── package.json         # Package configuration scripts
└── vite.config.js       # Vite compiler options
```

---

## ⚡ Quick Start / Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```
