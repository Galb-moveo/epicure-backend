const searchRouter = require('express').Router();
const searchController = require('../controllers/searchController');

// searchRouter.get('/', searchController.searchField);
searchRouter.get('/:keyword', searchController.searchField);

module.exports = searchRouter;
