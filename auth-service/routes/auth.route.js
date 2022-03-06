const router = require("express").Router();
const AuthController = require("../controllers/auth.controller");

const auth = new AuthController();
router.get("/register", auth.register);

module.exports = router;
