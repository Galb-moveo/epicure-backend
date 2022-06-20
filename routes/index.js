const router = require('express').Router();

const chefsRouter = require('../routes/chef');
const resRouter = require('../routes/restaurant');
const dishRouter = require('../routes/dish');
const searchRouter= require('../routes/search');
const chefOfWeekRouter = require('../routes/chefOfTheWeek');

router.use('/chefs', chefsRouter);
router.use('/restaurants', resRouter);
router.use('/dishes', dishRouter);
router.use('/chefOfWeek', chefOfWeekRouter);
router.use('/search', searchRouter);


module.exports = router;