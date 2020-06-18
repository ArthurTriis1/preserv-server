//const transporter = require('../config/mail')
const sgMail = require('../config/mail')
require('dotenv/config')

class MailController {
    async sendMail(req, res){

        const { name, message } = req.body;

        // const mailsent = await transporter.sendMail({
        //     text: `Nome: ${name}, Mensagem: ${message}`,
        //     subject: "Preserv Feedback",
        //     to: ["arthurfelandrade@gmail.com", "gabryelli.helena@gmail.com"]
        // })

        const msg = {
            to: ['agenciaakili@gmail.com', 'arthurfelandrade@gmail.com', 'gabryelli.helena@gmail.com'],
            from: 'arthurfelandrade@gmail.com',
            subject: "Preserv Feedback",
            text: `Email: ${name}, Mensagem: ${message}`,
          };
          try{

              const mailsent = await sgMail.send(msg);
              return res.json({message: mailsent})
          }catch(err){
            return res.status(400).json({key: process.env.KEY, message: err})
          }

    }
}

module.exports = new MailController();