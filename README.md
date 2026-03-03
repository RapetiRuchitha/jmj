# 🌊 JMJ Borewells - Professional Borewell Services

A modern, responsive website for **JMJ Borewells** contractor services with multi-language support (English & Telugu). Built with React 19 + Vite, featuring animated UI, an FAQ accordion, survey form, and floating contact buttons.

## 🌐 Live Website

**URL:** [https://RapetiRuchitha.github.io/jmj/](https://RapetiRuchitha.github.io/jmj/)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 **Home** | Hero section, image slider, highlights & call-to-action |
| 💼 **Services** | Comprehensive borewell service plans with pricing |
| 📍 **Location & Contact** | Embedded map + contact info side-by-side with survey form |
| 👥 **About** | Company background, team, and values |
| ❓ **FAQ** | Animated accordion FAQ in a two-column grid layout |
| 📋 **Survey Form** | Customer enquiry form that submits to backend API |
| 📞 **Floating Buttons** | Persistent Call & WhatsApp action buttons |
| 🌐 **Multi-language** | English and Telugu language support via context |
| 🎨 **Modern UI** | Glassmorphism design, CSS Modules, smooth Framer Motion animations |
| 📱 **Responsive** | Mobile-first layout, works on all screen sizes |
| 🌙 **Dark/Light Mode** | Theme toggle in Navbar |

---

## 📱 Contact Details

- 📱 **Phone:** +91 91001 11643
- 📧 **Email:** jmjborewell@gmail.com
- 📍 **Address:** 1-93, Near RCM Church, Chodavaram, 531034

---

## 🛠️ Technology Stack

### Frontend

| Tool | Version | Purpose |
|---|---|---|
| React | ^19.2.3 | UI Framework |
| Vite | ^7.2.4 | Build Tool & Dev Server |
| Framer Motion | ^12.x | Animations & transitions |
| Lucide React | ^0.562.0 | Icons |
| React Icons | ^5.5.0 | Additional icons |
| CSS Modules | — | Scoped component styling |

### Backend

| Tool | Purpose |
|---|---|
| Express.js | REST API server |
| CORS | Cross-origin resource sharing |

---

## 📦 Project Structure

```
jmj/
├── frontend/                    # React + Vite frontend (v2.0.0)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx           # Top navigation with language switcher & theme toggle
│   │   │   ├── Navbar.module.css
│   │   │   ├── Faq.jsx              # Animated two-column FAQ accordion
│   │   │   ├── Faq.module.css
│   │   │   ├── FloatingButtons.jsx  # Floating Call & WhatsApp buttons
│   │   │   ├── FloatingButtons.module.css
│   │   │   ├── Footer.jsx           # Site footer with links & contact
│   │   │   ├── Footer.module.css
│   │   │   ├── SurveyForm.jsx       # Customer enquiry form
│   │   │   └── SurveyForm.module.css
│   │   ├── pages/
│   │   │   ├── Home.jsx             # Hero, slider, highlights
│   │   │   ├── Home.module.css
│   │   │   ├── Services.jsx         # Service plan cards
│   │   │   ├── Services.module.css
│   │   │   ├── Location.jsx         # Map & contact info
│   │   │   ├── Location.module.css
│   │   │   ├── About.jsx            # About the company
│   │   │   └── About.module.css
│   │   ├── styles/                  # Global/shared styles
│   │   ├── App.jsx                  # Root layout & section assembly
│   │   ├── App.module.css
│   │   ├── LanguageContext.jsx      # Language context provider (EN/TE)
│   │   ├── translations.js          # All English & Telugu strings
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── backend/                     # Express.js API server
│   ├── server.js                # Survey submission endpoint
│   └── package.json
├── index.html                   # Root redirect page
└── README.md
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites

- Node.js v18 or higher
- npm

### 1. Clone the repository

```bash
git clone https://github.com/RapetiRuchitha/jmj.git
cd jmj
```

### 2. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

### 3. Start the Backend (optional)

```bash
cd backend
npm install
npm start
```

Backend API runs at: `http://localhost:3000`

#### Backend API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Health check |
| POST | `/api/survey` | Submit customer enquiry (name, phone, village, service) |

---

## 🌐 Deploy to GitHub Pages

### Build & Deploy

```bash
cd frontend
npm run deploy
```

This runs `vite build` then pushes the `dist/` folder to the `gh-pages` branch automatically.

### Enable GitHub Pages (first time only)

1. Go to **Settings → Pages** in your GitHub repository
2. Set source to `gh-pages` branch
3. Click **Save** — site goes live in 1–2 minutes

---

## 📝 Customization Guide

### Update Contact Numbers

Edit `frontend/src/components/FloatingButtons.jsx`:

```jsx
href="tel:+919100111643"          // Call button
href="https://wa.me/919100111643" // WhatsApp button
```

### Add/Edit FAQ Questions

In `frontend/src/translations.js`, update the `faqs` array under `home`:

```js
faqs: [
  { q: "Your question here?", a: "Answer here." },
  // ...
]
```

### Change Theme Colors

Edit CSS variables in `frontend/src/styles/`:

```css
:root {
  --primary: #3b82f6;
  --secondary: #8b5cf6;
}
```

### Add/Edit Services

Edit `frontend/src/pages/Services.jsx`

### Update Translations / Content

Edit `frontend/src/translations.js` — all English and Telugu strings for every section are defined here.

---

## 🐛 Troubleshooting

| Issue | Solution |
|---|---|
| Blank page after deploy | Verify `base` in `vite.config.js` matches your repo name (`/jmj/`) |
| Survey form not submitting | Ensure backend is running on port 3000 and CORS is enabled |
| Call button not working | Test on mobile; desktop requires a calling app (Skype, etc.) |
| Changes not live after deploy | Clear cache (Ctrl+Shift+R) and wait 2–3 minutes |
| Language not switching | Check `LanguageContext.jsx` and confirm the translation key exists in `translations.js` |

---

## 💰 Hosting Cost

| Service | Cost |
|---|---|
| GitHub Pages Hosting | **FREE** ✅ |
| SSL Certificate (HTTPS) | **FREE** ✅ |
| Call & WhatsApp Integration | **FREE** ✅ |
| **Total** | **$0 / month** 🎉 |

---

## 🔒 Security

- ✅ No sensitive data in code
- ✅ HTTPS enabled by default (GitHub Pages)
- ✅ No API keys exposed
- ✅ Safe for public deployment

---

## ✅ Current Feature Checklist

- [x] Home hero section with slider
- [x] Services section with plan cards
- [x] Location section with map
- [x] About section
- [x] FAQ accordion (animated, two-column, bilingual)
- [x] Survey / enquiry form connected to backend
- [x] Floating Call & WhatsApp buttons
- [x] Footer with links and contact details
- [x] Multi-language support (English & Telugu)
- [x] Dark / Light mode toggle
- [x] Responsive design (mobile, tablet, desktop)
- [x] GitHub Pages deployment configured
- [x] Free HTTPS hosting

---

## 📄 License

This project is private and proprietary to **JMJ Borewells**.

---

**Made with ❤️ for JMJ Borewells**
