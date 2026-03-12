let express = require("express");
const { fetchHotels, fetchHotelById } = require("../../controllers/hotel.controller");

let router = express.Router();

router.get("/all", fetchHotels);
router.get("/single/:id", fetchHotelById)

module.exports = router;