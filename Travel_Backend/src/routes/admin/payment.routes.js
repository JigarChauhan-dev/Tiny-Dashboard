let express = require("express");
const { Authenticate, Authorize } = require("../../middlewares/auth.middlewares");
const { addPayment, fetchPayments, updatePayment, removePayment } = require("../../controllers/payment.controller");
let router = express.Router();

router.post("/add", Authenticate, addPayment);
router.get("/all", Authenticate, Authorize("admin"), fetchPayments);
router.put("/edit/:id", Authenticate, Authorize("admin"), updatePayment);
router.delete("/remove/:id", Authenticate, Authorize("admin"), removePayment);

module.exports = router;