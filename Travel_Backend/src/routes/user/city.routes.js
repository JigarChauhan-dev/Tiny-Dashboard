let express = require("express");
const { fetchCity } = require("../../controllers/city.controller");

let router = express.Router();

router.get("/all", fetchCity);

module.exports = router;
