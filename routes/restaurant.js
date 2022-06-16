const resRouter = require('express').Router();
const restaurantController = require('../controllers/restaurantController');

resRouter.get('/restaurants', restaurantController.getAllRestaurants);
resRouter.post('/restaurants', restaurantController.addRestaurant);
resRouter.delete('/restaurants/:restaurantId', restaurantController.deleteRestaurantById);
resRouter.put('/restaurants/:restaurantId', restaurantController.updateRestaurant);
module.exports = resRouter;
