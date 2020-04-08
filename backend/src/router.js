const express = require ('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentesController');
const ProfileController = require('./controllers/ProfileController');     
const sessionController = require('./controllers/SessionController');
const routes = express.Router(); 

routes.post('/session' ,sessionController.create);
routes.get('/ongs' ,OngController.index); 
routes.post('/ongs' ,OngController.create);

routes.post('/incidents' ,IncidentsController.create);
routes.get('/incidents' ,IncidentsController.index);

routes.get('/profile' ,ProfileController.index);

routes.delete('/incidents/:id',IncidentsController.delete)


module.exports = routes;

        