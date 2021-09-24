const nodemailer = require("nodemailer");

async function sendMail({ from, to, subject, text, html }) {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER, // generated ethereal user
      pass: process.env.MAIL_PASSWORD, // generated ethereal password
    },
  });

  // Send mail with defined transport object
  let info = await transporter.sendMail({
    from: `InfiShare <${from}>`, // sender address
    to: to, // list of receivers
    subject: subject, // subject line
    text: text, // plain text body
    html: html, // html body
  });

  console.log(info);
}

module.exports = sendMail;
