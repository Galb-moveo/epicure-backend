const router = require('express').Router();

const chefsRouter = require('../routes/chef');
const resRouter = require('../routes/restaurant');
const dishRouter = require('../routes/dish');
const searchController = require('../routes/search');

router.use('/chefs', chefsRouter);
router.use('/restaurants', resRouter);
router.use('/dishes', dishRouter);
router.use('/search', searchController);

module.exports = router;