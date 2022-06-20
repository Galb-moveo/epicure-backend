const resRouter = require('express').Router();
const restaurantController = require('../controllers/restaurantController');

resRouter.get('/', restaurantController.getAllRestaurants);
resRouter.get('/:chefId', restaurantController.getRestaurantsByChef);
resRouter.post('/', restaurantController.addRestaurant);
resRouter.delete('/:restaurantId', restaurantController.deleteRestaurantById);
resRouter.put('/:restaurantId', restaurantController.updateRestaurant);
module.exports = resRouter;
