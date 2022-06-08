const express = require('express');

const router = express.Router();
const usersRouter = require('./Users');
const productsRouter = require('./Products');
const ordersRouter = require('./Orders');
const reviewsRouter = require('./Reviews')

router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/orders', ordersRouter);
router.use('/reviews', reviewsRouter);

router.get('/', (req, res) => {
  res.send('AirCommerce Is Alilve!');
});


module.exports = router;
