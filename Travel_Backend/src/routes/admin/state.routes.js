let express = require("express");
const { Authenticate,Authorize } = require("../../middlewares/auth.middlewares");
const {
  fetchState,
  addState,
  updateState,
  removeState,
} = require("../../controllers/state.controller");

let router = express.Router();

router.get("/all", fetchState);
router.post("/add", Authenticate, Authorize("admin"), addState);
router.put("/edit/:id", Authenticate, Authorize("admin"), updateState);
router.delete("/remove/:id", Authenticate, Authorize("admin"), removeState);

module.exports = router;
