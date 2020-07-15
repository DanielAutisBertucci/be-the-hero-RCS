const express = require('express');

const OngController = require('./controllers/OngController');


const { request } = require('http');

const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Rota / Recurso
 */

/**
 * Metodos http:
 * Get - Buscar informações do  backend
 * Post: Criar informação no Backend
 * Put: Editar informação do backend
 * Delete: Deletar informação no backend 
 */ 

 /**
  * Tipos de parâmetros
  * 
  * Query params: parâmetros nomeados eenviados na nota após "?" (filtros, paginação etc)
  * Route params: parâmetros utilizados para identificar recursos
  * request body: corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: Select * from users
    * Query Builder: Table('users').select('*').where
    * 
    */
routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);    

routes.get ('/ongs', OngController.index) ; 

routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes;