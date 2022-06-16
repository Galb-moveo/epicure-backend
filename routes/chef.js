const chefRouter = require('express').Router();
const chefController = require('../controllers/chefController');

chefRouter.get('/chefs', chefController.getAllChefs);
chefRouter.post('/chefs', chefController.addChef);
chefRouter.delete('/chefs/:chefId', chefController.deleteChefById);
chefRouter.put('/chefs/:chefId', chefController.updateChef);

module.exports = chefRouter;
