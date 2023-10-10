const express = require('express');
const employeesController = require('./controllers/employees');

const routes = express();

routes.get('/employees', employeesController.getAllActiveEmployees);
routes.get('/employees/dismissed', employeesController.getAllActiveDismissedEmployees);

module.exports = routes;