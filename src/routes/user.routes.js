const express = require("express");
const { registerUser } = require("../controllers/user.controllers");
const router = express.Router();
const upload = require("../middlewares/multer.middleware");

router.route("/register").post(
  upload.fields([
    {
      name: "avtar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);



module.exports = router;
