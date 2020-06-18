const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
require('dotenv/config')

const transporter = nodemailer.createTransport(smtpTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.ADDRESS_MAIL,
      pass: process.env.PASSWORD_MAIL
    },
    tls: {
      rejectUnauthorized: false,
    }
}));

module.exports = transporter;