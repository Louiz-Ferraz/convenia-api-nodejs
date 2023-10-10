const axios = require('axios');

const instanciaAxiosConvenia = axios.create({
    baseURL: 'https://public-api.convenia.com.br/api/v3/'
});

module.exports = instanciaAxiosConvenia;