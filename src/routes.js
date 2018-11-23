const express = require('express');

const contactController = require('./controllers/contactController');

const routes = express.Router();

// Rotas para renderizar formulários

routes.get('/contacts/create', contactController.renderFormRegister);
routes.get('/contacts/update/:id', contactController.renderFormUpdate);
routes.get('/contacts/search', contactController.renderSearch)

// Rotas de navegação entre as views e fluxo de dados com o CRUD

routes.get('/contacts', contactController.show);
routes.post('/contacts', contactController.store);
routes.post('/contacts/:id', contactController.update);
routes.delete('/contacts/:id', contactController.destroy);
routes.get('/contacts/:id', contactController.getContactById);
routes.post('/contacts/search', contactController.search);

module.exports = routes;
