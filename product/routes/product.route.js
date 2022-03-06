const router = require("express").Router();
const productController = require("../controller/product.controller");

router.get("/", productController.getAllProduct);

module.exports = router;
