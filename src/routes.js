const { Router } = require('express');
const GovController = require('../controllers/GovController');
const MailController = require('../controllers/MailController');
const routes = Router();


routes.get("/bairros", GovController.getBairros);
routes.get("/testes", GovController.getTestes);
routes.get("/preservativos", GovController.getPreservativos);
routes.get("/prevencao", GovController.getPrevencao);
routes.get("/tratamento", GovController.getTratamento);

routes.post("/sendmail", MailController.sendMail)


module.exports = routes;