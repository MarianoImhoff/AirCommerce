const express = require("express")
const router = express.Router();
const usersRouter = require("./Users")
const productsRouter = require("./Products")
const ordersRouter = require("./Orders")

router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/orders", ordersRouter);

module.exports = router;