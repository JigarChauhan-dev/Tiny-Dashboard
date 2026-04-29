const express = require("express");
const { Authenticate, Authorize } = require("../../middlewares/auth.middlewares");
const { createOrder } = require("../../controllers/razorpay.controller");
const router = express.Router();

router.post("/createorder",;,Authorize("user"),createOrder);

module.exports = router;