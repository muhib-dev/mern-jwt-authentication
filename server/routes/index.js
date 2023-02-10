const { Router } = require("express");
const authRouters = require("./auth");
const adminRouters = require("./admin");
const userRouters = require("./user");
const isAuth = require("../middleware/isAuth");

const router = Router();

// auth routes
router.use("/api/auth", authRouters);

// admin routes
router.use("/api/admin", isAuth("admin"), adminRouters);

// user routes
router.use("/api/user", isAuth("user"), userRouters);

module.exports = router;
