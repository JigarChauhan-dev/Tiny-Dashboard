const express = require("express");
const forgetpassword = require("../../controllers/forgetpass.controller");
const { resetPassword } = require("../../controllers/resetpassword.controller");
// const { Authenticate, Authorize } = require("../../middlewares/auth.middlewares");

const router = express.Router();

router.post("/forgotpassword", forgetpassword);
router.post("/reset-password", resetPassword);

module.exports = router;