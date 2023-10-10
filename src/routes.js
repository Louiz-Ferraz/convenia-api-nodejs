const express = require('express');
const testController = require('./controllers/employees');

const routes = express();

routes.get('/employees', testController.getAllActiveEmployees);

module.exports = routes;