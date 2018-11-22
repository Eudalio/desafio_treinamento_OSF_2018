const express = require('express');

const contactController = require('./controllers/contactController');

const routes = express.Router();

routes.get('/contacts', contactController.show);
routes.get('/contacts/create', contactController.renderFormRegister);
routes.post('/contacts', contactController.store);
routes.get('/contacts/update/:id', contactController.renderFormUpdate);
routes.put('/contacts/:id', contactController.update)
routes.delete('/contacts/:id', contactController.destroy)

module.exports = routes;
