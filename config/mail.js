//const nodemailer = require('nodemailer');

require('dotenv/config')
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.KEY);


// const transporter = nodemailer.createTransport(smtpTransport({
//   service: 'gmail',  
//   host: "smtp.gmail.com",
//     port: 587,
//     auth: {
//       user: process.env.ADDRESS_MAIL,
//       pass: process.env.PASSWORD_MAIL
//     },
//     tls: {
//       rejectUnauthorized: false,
//     }
// }));






module.exports = sgMail;