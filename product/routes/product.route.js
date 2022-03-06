const router = require("express").Router();
const productController = require("../controller/product.controller");
const catcher = require("../utils/catcher");
const isAuth = require("../../isAuthenticated");

router.get("/", productController.getAllProduct);
router.post("/create", isAuth, catcher(productController.createProduct));

module.exports = router;
