let express = require("express");
const { addFeedback, fetchFeedbacks } = require("../../controllers/feedback.controller");
let router = express.Router();

router.get("/all",fetchFeedbacks)
router.post("/submit",addFeedback);

module.exports = router;