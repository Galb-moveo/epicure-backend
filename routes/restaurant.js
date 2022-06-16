const resRouter = require('express').Router();
const restaurantController = require('../controllers/restaurantController');

resRouter.get('/', restaurantController.getAllRestaurants);
resRouter.post('/', restaurantController.addRestaurant);
resRouter.delete('/:restaurantId', restaurantController.deleteRestaurantById);
resRouter.put('/:restaurantId', restaurantController.updateRestaurant);
module.exports = resRouter;
