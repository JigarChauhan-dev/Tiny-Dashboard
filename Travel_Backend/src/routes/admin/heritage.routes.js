let express = require("express");
const {
  fetchHeritage,
  addHeritage,
  removeHeritage,
  editHeritage,
  fetchHeritageById,
} = require("../../controllers/heritage.controller");
const {
  Authorize,
  Authenticate,
} = require("../../middlewares/auth.middlewares");
const upload = require("../../middlewares/multer.middlewares");

let router = express.Router();

router.get("/all", fetchHeritage);
router.get("/details/:id", fetchHeritage);
router.post(
  "/add",
  upload.fields([
    { name: "image_path", maxCount: 1 },
    { name: "gallery_images", maxCount: 10 },
  ]),
  addHeritage,
);
router.put(
  "/update/:id",
  upload.fields([
    { name: "image_path", maxCount: 1 },
    { name: "gallery_images", maxCount: 10 },
  ]),
  editHeritage
);
router.delete("/remove/:id", Authenticate, Authorize("admin"), removeHeritage);
router.post("/edit/:id", Authenticate, Authorize("admin"), editHeritage);
router.get("/single/:id", fetchHeritageById);

module.exports = router;
