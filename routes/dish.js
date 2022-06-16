const dishRouter = require('express').Router();
const dishController = require('../controllers/dishController');

dishRouter.get('/dishes', dishController.getAllDishes);
dishRouter.post('/dishes', dishController.addDish);
dishRouter.delete('/dishes/:dishId', dishController.deleteDishById);
dishRouter.put('/dishes/:dishId', dishController.updateDish);

module.exports = dishRouter;