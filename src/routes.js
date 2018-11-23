const express = require('express');

const contactController = require('./controllers/contactController');

const routes = express.Router();

routes.get('/contacts/create', contactController.renderFormRegister);
routes.get('/contacts/update/:id', contactController.renderFormUpdate);
routes.get('/contacts/search', contactController.renderSearch)

routes.get('/contacts', contactController.show);
routes.post('/contacts', contactController.store);
routes.post('/contacts/:id', contactController.update);
routes.delete('/contacts/:id', contactController.destroy);
routes.get('/contacts/:id', contactController.search);

module.exports = routes;
