let express = require("express");
const { Authenticate, Authorize } = require("../../middlewares/auth.middlewares");
const {  removeBooking, UpdateBookingStatus, fetchAllBookings } = require("../../controllers/book.controller");
let router = express.Router();

router.get("/",Authenticate,Authorize("admin"),fetchAllBookings)
router.delete("/remove/:id",Authenticate,Authorize("admin"),removeBooking)
router.put("/status/:id",Authenticate,Authorize("admin"),UpdateBookingStatus);

module.exports = router;