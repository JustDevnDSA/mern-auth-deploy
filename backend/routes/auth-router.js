const router = require("express").Router();
const { signUp, login } = require("../controllers/auth-controller");
const {
  signupValidation,
  loginValidation,
} = require("../middlewares/auth-validator");

router.route("/signup").post(signupValidation, signUp);

router.route("/login").post(loginValidation, login);

module.exports = router;
