let express = require("express");
const { fetchHeritage, fetchHeritageById } = require("../../controllers/heritage.controller");

let router = express.Router();

router.get("/all", fetchHeritage);
router.get("/single/:id", fetchHeritageById);

module.exports = router;
