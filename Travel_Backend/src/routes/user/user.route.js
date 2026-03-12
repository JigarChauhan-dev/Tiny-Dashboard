let express = require("express");
const {
  Authorize,
  Authenticate,
} = require("../../middlewares/auth.middlewares");
const { Profile } = require("../../controllers/user.controller");
const { updateUser } = require("../../controllers/users.controller");
let router = express.Router();

router.get("/profile", Authenticate, Authorize("user"), Profile);
router.get("/profilehome", Profile);
router.put("/update/:id",Authenticate,Authorize("user"),updateUser)


module.exports = router;
