const router = require('express').Router();

const chefsRouter = require('../routes/chef');
const resRouter = require('../routes/restaurant');
const dishRouter = require('../routes/dish');

router.use('/chefs', chefsRouter);
router.use('/restaurants', resRouter);
router.use('/dishes', dishRouter);

module.exports = router;