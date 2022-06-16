const chefRouter = require('express').Router();
const chefController = require('../controllers/chefController');

chefRouter.get('/', chefController.getAllChefs);
chefRouter.post('/', chefController.addChef);
chefRouter.delete('/:chefId', chefController.deleteChefById);
chefRouter.put('/:chefId', chefController.updateChef);

module.exports = chefRouter;
