const router = require('express').Router();

const chefsRouter = require('../routes/chef');
const resRouter = require('../routes/restaurant');
const dishRouter = require('../routes/dish');

router.use('/', chefsRouter);
router.use('/', resRouter);
router.use('/', dishRouter);

module.exports = router;