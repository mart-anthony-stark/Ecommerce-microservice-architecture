const router = require("express").Router();
const orderController = require("../controller/order.controller");

router.get("/", orderController.getAllOrders);

module.exports = router;
