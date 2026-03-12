let express = require("express");
const { Authenticate, Authorize } = require("../../middlewares/auth.middlewares");
const { addBooking, fetchBookings, removeBooking } = require("../../controllers/book.controller");
let router = express.Router();

router.get("/all",Authenticate,Authorize("user"),fetchBookings)
router.post("/submit",Authenticate,Authorize("user"),addBooking);
router.delete("/remove/:id",Authenticate,Authorize("admin"),removeBooking)

module.exports = router;