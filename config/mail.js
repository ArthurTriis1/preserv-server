const nodemailer = require('nodemailer');
require('dotenv/config')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.ADDRESS_MAIL,
      pass: process.env.PASSWORD_MAIL
    },
    tls: {
      rejectUnauthorized: false,
    }
})

module.exports = transporter;