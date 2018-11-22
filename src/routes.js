const express = require('express');

const contactController = require('./controllers/contactController');

const routes = express.Router();

routes.get('/contacts', contactController.show);
routes.get('/contacts/create', contactController.renderForm);
routes.post('/contacts', contactController.store);

module.exports = routes;
