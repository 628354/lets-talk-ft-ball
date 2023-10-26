// email.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail', // e.g., 'Gmail', 'Outlook', etc.
  auth: {
    user: 'arvind.kumar@dightinfotech.com',
    pass: 'dzxbyyfyxhhxhxks'
  }
});

function sendResetPasswordEmail(email, userId) {
  const mailOptions = {
    from: 'arvind.kumar@dightinfotech.com',
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
