const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
    }
});

router.post('/submit', async (req, res) => {
    try {
        const { name, message, contact } = req.body;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: contact,
            subject: message,  // Using the message as subject
            text: `From: ${contact}`  // Just the sender's email in body
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ success: false, message: 'Error submitting form' });
    }
});

module.exports = router; 