const resRouter = require('express').Router();
const restaurantController = require('../controllers/restaurantController');
const authMiddleware = require('../middleware/auth');

resRouter.get('/', restaurantController.getAllRestaurants);
resRouter.get('/:chefId', restaurantController.getRestaurantsByChef);
resRouter.post('/', authMiddleware,restaurantController.addRestaurant);
resRouter.delete('/:restaurantId',authMiddleware, restaurantController.deleteRestaurantById);
resRouter.put('/:restaurantId',authMiddleware, restaurantController.updateRestaurant);
module.exports = resRouter;
