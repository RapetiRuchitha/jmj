# 🌊 JMJ Borewells - Professional Borewell Services

A modern, responsive website for JMJ Borewells contractor services with multi-language support (English & Telugu).

## ✨ Features

- 🏠 **Home Page** - Professional landing page with company overview
- 💼 **Services** - Comprehensive borewell service plans
- 📍 **Location** - Interactive map and contact information
- 📞 **Call & WhatsApp** - Floating action buttons for instant contact
- 🌐 **Multi-language** - English and Telugu language support
- 🎨 **Modern UI** - Beautiful glassmorphism design with smooth animations
- 📱 **Responsive** - Works perfectly on all devices (mobile, tablet, desktop)
- 🌙 **Dark/Light Mode** - Theme toggle for user preference

## 🚀 Live Demo

**Website URL:** `https://YOUR_USERNAME.github.io/jmj/`

(Replace `YOUR_USERNAME` with your GitHub username after deployment)

## 📱 Contact Features

### ✅ Call Button
- **Phone:** +91 91001 11643
- Works on mobile devices (opens phone dialer)
- Works on desktop with calling apps (Skype, Teams, etc.)

### ✅ WhatsApp Button
- **WhatsApp:** +91 91001 11643
- Opens WhatsApp app on mobile
- Opens WhatsApp Web on desktop
- Direct messaging capability

## 🛠️ Technology Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** Custom CSS with CSS Variables
- **Animations:** Framer Motion
- **Icons:** Lucide React & React Icons
- **Routing:** React Router DOM
- **Backend:** Express.js (for future API integration)

## 📦 Project Structure

```
jmj/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── FloatingCallButton.jsx
│   │   │   ├── FloatingWhatsAppButton.jsx
│   │   │   ├── Slider.jsx
│   │   │   └── SurveyForm.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Location.jsx
│   │   │   └── About.jsx
│   │   ├── App.jsx          # Main app component
│   │   ├── LanguageContext.jsx
│   │   ├── translations.js
│   │   └── index.css        # Global styles
│   ├── public/              # Static assets
│   └── package.json
├── backend/                 # Express backend (for future use)
│   ├── server.js
│   └── package.json
└── DEPLOYMENT_GUIDE.md      # Detailed deployment instructions
```

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/jmj.git
   cd jmj
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies** (optional)
   ```bash
   cd ../backend
   npm install
   ```

4. **Run the development server**
   ```bash
   # Frontend (from frontend directory)
   npm run dev
   ```
   
   Frontend will be available at: `http://localhost:5173`

5. **Run backend** (optional, for future API integration)
   ```bash
   # Backend (from backend directory)
   npm start
   ```
   
   Backend will be available at: `http://localhost:3000`

## 🌐 Deploy to GitHub Pages (FREE)

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `jmj` (or any name you prefer)
3. Make it **Public** (required for free GitHub Pages)
4. **DO NOT** initialize with README

### Step 2: Push Code to GitHub

```bash
# Navigate to project root
cd "c:\Users\bunny\OneDrive\Desktop\JMJ PROJECTS\jmj\Proj_Anti"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - JMJ Borewells Website"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/jmj.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to GitHub Pages

```bash
# Navigate to frontend folder
cd frontend

# Deploy (this will build and publish to gh-pages branch)
npm run deploy
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select `gh-pages` branch
4. Click **Save**
5. Wait 1-2 minutes for deployment

### Step 5: Access Your Website

Your website will be live at:
```
https://YOUR_USERNAME.github.io/jmj/
```

## 🔄 Update Your Website

Whenever you make changes to the code:

```bash
cd frontend
npm run deploy
```

Your website will update automatically in 1-2 minutes!

## 💰 Hosting Cost

| Service | Cost |
|---------|------|
| GitHub Pages Hosting | **FREE** ✅ |
| SSL Certificate (HTTPS) | **FREE** ✅ |
| Call Feature | **FREE** ✅ |
| WhatsApp Feature | **FREE** ✅ |
| **Total** | **$0/month** 🎉 |

## 📝 Customization

### Update Contact Information

Edit `frontend/src/components/FloatingCallButton.jsx`:
```jsx
href="tel:+919100111643"  // Change phone number
```

Edit `frontend/src/components/FloatingWhatsAppButton.jsx`:
```jsx
href="https://wa.me/919100111643"  // Change WhatsApp number
```

### Update Company Details

Edit `frontend/src/App.jsx` (Contact Details section):
```jsx
<strong>Phone:</strong> +91 91001 11643<br /><br />
<strong>Email:</strong> jmjborewell@gmail.com<br /><br />
<strong>Address:</strong><br />
1-93, Near RCM Church,<br />
Chodavaram, 531034
```

### Change Colors/Theme

Edit `frontend/src/index.css` - CSS variables at the top:
```css
:root {
  --primary: #3b82f6;
  --secondary: #8b5cf6;
  /* ... more variables */
}
```

### Add/Edit Services

Edit `frontend/src/pages/Services.jsx`

### Update Translations

Edit `frontend/src/translations.js` for English/Telugu content

## 🐛 Troubleshooting

### Issue: Blank page after deployment
**Solution:** Verify `vite.config.js` has correct base path matching your repository name

### Issue: Call button not working
**Solution:** 
- Test on mobile device (desktop may not support `tel:` links)
- Verify phone number format

### Issue: WhatsApp button not working
**Solution:**
- Ensure WhatsApp is installed (mobile) or use WhatsApp Web (desktop)
- Check number format in URL (no + or spaces)

### Issue: Changes not showing after deployment
**Solution:**
- Clear browser cache (Ctrl + Shift + R)
- Wait 2-3 minutes for GitHub Pages to update
- Check GitHub Actions tab for deployment status

## 📊 Analytics (Optional)

To track visitors, add Google Analytics:

1. Get tracking ID from [Google Analytics](https://analytics.google.com)
2. Add tracking code to `frontend/index.html`

## 🔒 Security

- ✅ No sensitive data in code
- ✅ HTTPS enabled by default (GitHub Pages)
- ✅ No API keys exposed
- ✅ Safe for public deployment

## 📞 Support

**JMJ Borewells Contact:**
- 📱 Phone: +91 91001 11643
- 📧 Email: jmjborewell@gmail.com
- 📍 Address: 1-93, Near RCM Church, Chodavaram, 531034

## 📄 License

This project is private and proprietary to JMJ Borewells.

## 🎉 Success Checklist

- [x] ✅ Estimation/Calculator removed from website
- [x] ✅ GitHub Pages deployment configured
- [x] ✅ Call button working
- [x] ✅ WhatsApp button working
- [x] ✅ Multi-language support (EN/TE)
- [x] ✅ Responsive design
- [x] ✅ Dark/Light mode toggle
- [x] ✅ FREE hosting setup

---

**Made with ❤️ for JMJ Borewells**

For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
