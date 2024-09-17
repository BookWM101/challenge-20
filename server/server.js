const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to handle JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../client/build')));

// POST route to handle contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Validate the form data
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Create transporter object with SMTP server details
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // You can use other services such as SendGrid, Yahoo, etc.
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address (stored in .env)
      pass: process.env.EMAIL_PASS, // Your Gmail password or app-specific password (stored in .env)
    },
  });

  // Email options
  const mailOptions = {
    from: email, // The email from the form
    to: 'bookwm2016@gmail.com', // The recipient's email (your email)
    subject: `Contact form submission from ${name}`,
    text: `You received a message from ${name} (${email}):\n\n${message}`,
  };

  // Send email using Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

// Fallback for any other routes - serving the React frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



