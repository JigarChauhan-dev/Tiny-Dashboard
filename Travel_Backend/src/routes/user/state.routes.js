let express = require("express");
const { fetchState } = require("../../controllers/state.controller");

let router = express.Router();

router.get("/all", fetchState);

module.exports = router;
