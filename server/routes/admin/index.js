const { Router } = require("express");
const adminController = require("../../controllers/admin");

const router = Router();

// api/admin/profile
router.use("/profile", adminController.profile);

module.exports = router;
