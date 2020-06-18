const axios = require('axios');

const apiGov = axios.create({
    baseURL: 'http://dados.recife.pe.gov.br/api/3/action'
})

module.exports = apiGov;