const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Security: Trust Reverse Proxies (Vercel/Nginx/Render)
// Necessary for express-rate-limit to get the true client IP
app.set('trust proxy', 1);

// Security: Restrict CORS
const allowedOrigins = [
  'http://localhost:5173',
  'https://jmjborewells.page',
  'https://www.jmjborewells.page'
];
app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());

// Security: Rate Limiting (max 5 requests per 15 mins per IP)
const surveyLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many requests from this IP, please try again later.' }
});

// Database: SQLite Setup (Note: Ephemeral in serverless/cloud environments)
// Provide an ENV-based DB override strategy if migrating to Postgres later
const dbPath = path.resolve(__dirname, 'leads.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error('Error opening db:', err.message);
  else {
    db.run(`CREATE TABLE IF NOT EXISTS surveys (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      village TEXT NOT NULL,
      service TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
  }
});

app.get('/', (req, res) => {
  res.send('JMJ Borewells Backend Running');
});

// Survey Submission Endpoint with Strict Validation and Rate Limiting
app.post(
  '/api/survey',
  surveyLimiter,
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('phone').trim().isLength({ min: 10 }).withMessage('Valid phone is required'),
    body('village').trim().notEmpty().withMessage('Village is required'),
    body('service').trim()
      .isIn(['4.5 inch', '6.5 inch', 'Pressing Service'])
      .withMessage('Invalid service type strictly enforced')
  ],
  (req, res) => {
    // API: Input Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, phone, village, service } = req.body;

    // Database: Persistent Storage
    const sql = `INSERT INTO surveys (name, phone, village, service) VALUES (?, ?, ?, ?)`;
    db.run(sql, [name, phone, village, service], function(err) {
      if (err) {
        console.error('DB Insert Error:', err.message);
        return res.status(500).json({ error: 'Failed to save survey request.' });
      }

      console.log('--- New Survey Request Saved ---');
      console.log(`ID: ${this.lastID} | Name: ${name} | Phone: ${phone}`);
      console.log('--------------------------------');

      // TODO: Implement SMS/Email notification here

      res.status(200).json({ message: 'Request received successfully', id: this.lastID });
    });
  }
);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});
