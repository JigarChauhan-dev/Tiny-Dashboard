const express = require("express");
const router = express.Router();
const { Authenticate, Authorize } = require("../../middlewares/auth.middlewares");
const { fetchAllUsers, addUser, updateUser, removeUser } = require("../../controllers/users.controller");

router.get("/all", Authenticate, Authorize("admin"), fetchAllUsers);
router.post("/add", Authenticate, Authorize("admin"), addUser);
router.put("/edit/:id", Authenticate, Authorize("admin"), updateUser);
router.delete("/remove/:id", Authenticate, Authorize("admin"), removeUser);

module.exports = router;