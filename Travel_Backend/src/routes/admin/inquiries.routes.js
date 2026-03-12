let express = require("express");
const { Authenticate, Authorize } = require("../../middlewares/auth.middlewares");
const { fetchInquiry, removeInquiry } = require("../../controllers/inquiries.controller");
let router = express.Router();

router.get("/all",Authenticate,Authorize("admin"),fetchInquiry);
router.delete("/remove/:id",Authenticate,Authorize("admin"),removeInquiry);

module.exports = router;