const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('JMJ Borewells Backend Running');
});

// Survey Submission Endpoint
app.post('/api/survey', (req, res) => {
  const { name, phone, village, service } = req.body;

  console.log('--- New Survey Request ---');
  console.log(`Name: ${name}`);
  console.log(`Phone: ${phone}`);
  console.log(`Village: ${village}`);
  console.log(`Service: ${service}`);
  console.log('--------------------------');

  // In a real production app, you would use an SMS API (like Twilio)
  // or an Email API (like Nodemailer/SendGrid) here to notify the owner.

  res.status(200).json({ message: 'Request received successfully' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});
