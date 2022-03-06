const router = require("express").Router();
const productController = require("../controller/product.controller");
const isAuth = require("../../isAuthenticated");

router.get("/", productController.getAllProduct);
router.post("/create", isAuth, productController.createProduct);

module.exports = router;
