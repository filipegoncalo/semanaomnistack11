const express = require('express');

const OngController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;

/**
    * Tipos de Parâmetros
    *
    * Query Params: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
    * Route Params: Parâmetros utilizados para identificar recursos
    * Request Body: Corpo da requisição, utilizada para criar ou alterar recursos

        * Query Params
        * http://localhost:3333/users?nome=filipe&idade=24
        *
            const params = request.query;
            console.log(params);

        * Route Params
        * http://localhost:3333/users/1
        *
            const params = request.params;
            console.log(params);

        * Request Body
        * http://localhost:3333/users
        * app.use(express.json());

            const body = request.body;
            console.log(body);
    */