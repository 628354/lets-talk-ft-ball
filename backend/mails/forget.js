// email.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'YourEmailService', // e.g., 'Gmail', 'Outlook', etc.
  auth: {
    user: 'your_email@example.com',
    pass: 'your_email_password'
  }
});

function sendResetPasswordEmail(email, userId) {
  const mailOptions = {
    from: 'your_email@example.com',
    to: email,
    subject: 'Password Reset Link',
    text: `Click the following link to reset your password: http://localhost:5000/forget-password/${userId}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email: ' + error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = {
  sendResetPasswordEmail
};
