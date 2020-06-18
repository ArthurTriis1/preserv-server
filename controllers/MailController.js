const transporter = require('../config/mail')

class MailController {
    async sendMail(req, res){

        const { name, message } = req.body;

        const mailsent = await transporter.sendMail({
            text: `Nome: ${name}, Mensagem: ${message}`,
            subject: "Preserv Feedback",
            to: ["arthurfelandrade@gmail.com", "gabryelli.helena@gmail.com"]
        })

        return res.json({message: mailsent})
    }
}

module.exports = new MailController();