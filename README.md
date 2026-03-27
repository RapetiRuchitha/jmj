# JMJ Borewells Website

Official website for JMJ Borewells. This is a responsive single-page web application built with React and Vite to present borewell services, company information, contact details, and customer enquiry options.

## Live Website

[https://jmjborewells.page](https://jmjborewells.page)

## Preview

### Telugu Version

![Telugu version preview](./Telugu_version.png)

### English Version

![English version preview](./English_version.png)

## Features

- **Responsive Single-Page Layout:** Modern UI/UX built with React and Vite.
- **Bilingual Support:** Full English and Telugu language toggle.
- **Theme Support:** Dark and light mode configurations dynamically driven by CSS variables.
- **Performance Optimized:** Preloaded LCP hero images, optimized animations, and glassmorphism UI.
- **Secure Lead Capture API:** The `Reach Us` survey form securely stores leads into an SQLite database via a protected Express backend before dynamically launching a synchronous WhatsApp chat popup.
- **API Security:** The backend is hardened with:
  - `express-rate-limit` to prevent spam and DDOS attacks.
  - Strict Cross-Origin Resource Sharing (CORS) restricted to your production and dev domains.
  - `express-validator` to strictly type-check and sanitize input payloads against Cross-Site Scripting (XSS) and SQL Injection vectors.
  - Reverse proxy trust headers (`app.set('trust proxy', 1)`) configured for safe Vercel/Nginx deployments.

## Contact Information

- Phone: +91 93928 12362
- Email: jmjborewell@gmail.com
- Address: Ramanyapeta, Near RCM Church, Chodavaram, Anakapalle District, Andhra Pradesh, 531036

## Tech Stack

### Frontend
- React 18
- Vite
- Framer Motion
- Lucide React
- CSS Modules

### Backend
- Node.js & Express
- SQLite (Local persistent storage via `leads.db`)
- `express-rate-limit`
- `express-validator`
- `cors`

## Local Development

### Prerequisites
- Node.js 18 or later
- npm

### 1. Setting Up the Backend
The backend serves the API on port `3000` and creates an SQLite database file `leads.db`.

```bash
cd backend
npm install
npm start
```
Runs on: `http://localhost:3000`

### 2. Setting Up the Frontend
The frontend requires the API URL to be configured to talk to the backend. Create a `.env` file inside the `frontend/` directory (or configure Vercel environment variables in production):

```env
# frontend/.env
VITE_API_URL=http://localhost:3000
```

```bash
cd frontend
npm install
npm run dev
```
Runs on: `http://localhost:5173` (or your configured Vite port)

## Architecture Notes & Future Migrations
- **WhatsApp Integration:** The current enquiry flow securely saves the user's lead into the database *first*, and upon success, synchronously redirects the user to WhatsApp with a prefilled message.
- **Database Scalability (Important):** The backend currently uses local file-based SQLite (`leads.db`). If deployed to a serverless/ephemeral environment (like Vercel, Heroku free tier, AWS ECS), the `leads.db` file will be wiped out when the server sleeps. When migrating to full production, replace the SQLite integration with a managed PostgreSQL connection string (like Supabase, Render, or PlanetScale).
- **Translations:** All static UI text is managed centrally in `frontend/src/translations.js`.

## License

This project is private and proprietary to JMJ Borewells.
