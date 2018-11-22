const express = require('express');

const contactController = require('./controllers/contactController');

const routes = express.Router();

routes.get('/contacts', contactController.show);

module.exports = routes;
