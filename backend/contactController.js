const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
require('dotenv').config();

router.post('/', async (req, res) => {
  const { username, useremail } = req.body;

  if (!username || !useremail) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Create transporter with Gmail SMTP and secure SSL port 465
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // App Password here
    },
  });

  let mailOptions = {
    from: `"Contact Form" <${process.env.EMAIL_USER}>`, // sender info
    to: process.env.TO_EMAIL, // your email to receive notifications
    subject: 'New Contact Request',
    text: `You have a new contact form submission:\n\nName: ${username}\nEmail: ${useremail}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ message: 'Failed to send message', error });
  }
});

module.exports = router;
