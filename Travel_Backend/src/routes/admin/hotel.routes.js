let express = require("express");
const { fetchHotels, addHotel, updateHotel, removeHotel, fetchHotelById } = require("../../controllers/hotel.controller");
const { Authenticate, Authorize } = require("../../middlewares/auth.middlewares");
const uploadHeritage = require("../../middlewares/multer.middlewares");

let router = express.Router();

router.get("/all", fetchHotels);
router.post("/add", Authenticate, Authorize("admin"),uploadHeritage.single("image_path"), addHotel);
router.put(
  "/update/:id",
  Authenticate,
  Authorize("admin"),
  uploadHeritage.single("image_path"),
  updateHotel
);
// router.post("/add", Authenticate, Authorize("admin"), addHotel);

router.delete("/remove/:id", Authenticate,Authorize("admin"),removeHotel);
router.get("/single/:id", fetchHotelById)

module.exports = router;