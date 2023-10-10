const axios = require('axios');

const instanciaAxiosConvenia = axios.create({
    baseURL: 'https://public-api.convenia.com.br/api/v3/',
    headers: {
        token: process.env.CONVENIA_TOKEN
    }
});

module.exports = instanciaAxiosConvenia;