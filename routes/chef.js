const chefRouter = require('express').Router();
const chefController = require('../controllers/chefController');
const authMiddleware = require('../middleware/auth');

chefRouter.get('/', chefController.getAllChefs);
chefRouter.post('/',authMiddleware, chefController.addChef);
chefRouter.delete('/:chefId',authMiddleware, chefController.deleteChefById);
chefRouter.put('/:chefId', authMiddleware, chefController.updateChef);

module.exports = chefRouter;
