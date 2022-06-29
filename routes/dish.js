const dishRouter = require('express').Router();
const dishController = require('../controllers/dishController');
const authMiddleware = require('../middleware/auth');

dishRouter.get('/', dishController.getAllDishes);
dishRouter.post('/', authMiddleware, dishController.addDish);
dishRouter.delete('/:dishId',authMiddleware, dishController.deleteDishById);
dishRouter.put('/:dishId',authMiddleware, dishController.updateDish);

module.exports = dishRouter;