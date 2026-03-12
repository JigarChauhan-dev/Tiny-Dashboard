let express = require("express");
const { Authenticate, Authorize } = require("../../middlewares/auth.middlewares");
const { addUserSubscription, fetchUserSubscriptions, removeUserSubscription, updateSub } = require("../../controllers/userSubscription.controller");


let router = express.Router();

router.get("/all", Authenticate, fetchUserSubscriptions);
router.post("/subscribe", Authenticate, Authorize("admin"), addUserSubscription);
router.put("/edit/:id", Authenticate, Authorize("admin"), updateSub);
router.delete("/remove/:id", Authenticate, Authorize("admin"), removeUserSubscription)

module.exports = router;