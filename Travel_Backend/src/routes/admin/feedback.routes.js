let express = require("express");
const { Authenticate, Authorize } = require("../../middlewares/auth.middlewares");
const { fetchFeedbacks, removeFeedback, updateFeedback } = require("../../controllers/feedback.controller");

let router = express.Router();
router.get("/all", Authenticate, fetchFeedbacks);
router.put("/edit/:id", Authenticate, Authorize("admin"), updateFeedback);
router.delete("/remove/:id", Authenticate, Authorize("admin"), removeFeedback);

module.exports = router;