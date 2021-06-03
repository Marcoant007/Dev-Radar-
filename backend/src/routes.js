const {Router} = require('express');
const DevController = require('../src/controller/DevController')
const SearchController = require('./controller/SearchController')


const routes = Router();
routes.get('/devs', DevController.index)
routes.get('/search', SearchController.index);
routes.post('/devs', DevController.store)


module.exports = routes