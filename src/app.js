const express = require('express');
const routes = require('./routes');
const serverless = require('serverless-http')
const cors = require('cors');

const corsOptions = {
    origin: '*',
}

const app = express();

app.use(cors(corsOptions))
app.use(express.json());
app.use('/.netlify/functions/app', routes);

module.exports.handler = serverless(app);