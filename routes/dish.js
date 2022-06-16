const dishRouter = require('express').Router();
const dishController = require('../controllers/dishController');

dishRouter.get('/', dishController.getAllDishes);
dishRouter.post('/', dishController.addDish);
dishRouter.delete('/:dishId', dishController.deleteDishById);
dishRouter.put('/:dishId', dishController.updateDish);

module.exports = dishRouter;