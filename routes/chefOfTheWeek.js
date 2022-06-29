const chefOfWeekRouter = require('express').Router();
const chefOfTheWeekController = require('../controllers/chefOfTheWeek');
const authMiddleware = require('../middleware/auth');

chefOfWeekRouter.get('/', chefOfTheWeekController.getChefOfWeek);
chefOfWeekRouter.post('/',authMiddleware, chefOfTheWeekController.addChefOfWeek);
chefOfWeekRouter.put('/:chefId',authMiddleware, chefOfTheWeekController.updateChefOfWeek);

module.exports = chefOfWeekRouter;