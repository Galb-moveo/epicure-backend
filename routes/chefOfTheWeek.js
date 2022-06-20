const chefOfWeekRouter = require('express').Router();
const chefOfTheWeekController = require('../controllers/chefOfTheWeek');

chefOfWeekRouter.get('/', chefOfTheWeekController.getChefOfWeek);
chefOfWeekRouter.post('/', chefOfTheWeekController.addChefOfWeek);
chefOfWeekRouter.put('/:chefId', chefOfTheWeekController.updateChefOfWeek);

module.exports = chefOfWeekRouter;