let express = require("express");
const {
  Authenticate,
  Authorize,
} = require("../../middlewares/auth.middlewares");
const {
  fetchCity,
  addCity,
  updateCity,
  removeCity,
} = require("../../controllers/city.controller");

let router = express.Router();

router.get("/all", fetchCity);
router.post("/add", Authenticate, Authorize("admin"), addCity);
router.put("/edit/:id", Authenticate, Authorize("admin"), updateCity);
router.delete("/remove/:id", Authenticate, Authorize("admin"), removeCity);

module.exports = router;
