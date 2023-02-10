const { Router } = require("express");
const authSchema = require("../validations/authSchema");
const authController = require("../controllers/auth");
const validate = require("../middleware/validate");

const router = Router();

// api/auth/signup
router.post("/signup", validate(authSchema.signup), authController.signup);

// api/auth/login
router.post("/login", validate(authSchema.login), authController.login);

// api/auth/refresh
router.get("/refresh", authController.refresh);

// api/auth/logout
router.get("/logout", authController.logout);

module.exports = router;
