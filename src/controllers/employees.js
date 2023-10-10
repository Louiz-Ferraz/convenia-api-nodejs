const instanciaAxiosConvenia = require('../services/convenia');
const knex = require('../conexao');

const getAllActiveEmployees = async (req, res) => {
  try {
    const employees = await instanciaAxiosConvenia.get(`employees`);
    return res.status(employees.status).json(employees.data);
  } catch (error) {
    const { status, data: { errors } } = error.response;
    return res.status(status).json(
      `${errors[0].type}: ${errors[0].parameter_name} - ${errors[0].message}`
    );
  }
}

const getAllActiveDismissedEmployees = async (req, res) => {
  try {
    const dismissedEmployees = await instanciaAxiosConvenia.get(`employees/dismissed`);
    return res.status(dismissedEmployees.status).json(dismissedEmployees.data);
  } catch (error) {
    const { status, data: { errors } } = error.response;
    return res.status(status).json(
      `${errors[0].type}: ${errors[0].parameter_name} - ${errors[0].message}`
    );
  }
}

module.exports = {
  getAllActiveEmployees,
  getAllActiveDismissedEmployees
}