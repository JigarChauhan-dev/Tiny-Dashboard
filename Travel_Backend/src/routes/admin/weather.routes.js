let express = require("express");
const { Authenticate } = require("../../middlewares/auth.middlewares");
const { syncRealWeather } = require("../../controllers/weather.controller");

let router = express.Router();

// This endpoint triggers the live weather fetch and save
// URL: /api/weather/sync
router.post("/sync", Authenticate, syncRealWeather);

module.exports = router;