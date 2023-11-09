// email.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail', // e.g., 'Gmail', 'Outlook', etc.
  auth: {
    user: 'arvind.kumar@dightinfotech.com',
    pass: 'dzxbyyfyxhhxhxks'
  }
});

function sendContactusEmail(data) {
  const mailOptions = {
    from: 'arvind.kumar@dightinfotech.com',
    to: "arvind.kumar@dightinfotech.com",
    subject: 'user Contactus',
    text: `
           user wants to Contact with admin...
           user=${data.name}
           email=${data.email}
           subject=${data.subject}
           message=${data.message}
    `
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
    sendContactusEmail
};
