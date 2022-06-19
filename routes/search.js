const searchRouter = require('express').Router();
const searchController = require('../controllers/searchController');


searchRouter.get('/:keyword', searchController.searchField);


module.exports = searchRouter;