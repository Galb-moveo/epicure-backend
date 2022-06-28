const userRouter = require('express').Router();
const userController = require('../controllers/userController');

userRouter.get('/', userController.getAllUsers);
userRouter.get('/me', userController.getCurrentUser);
userRouter.delete('/:userId', userController.deleteUserById);
userRouter.put('/:userId', userController.updateUser);

module.exports = userRouter;