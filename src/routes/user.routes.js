const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/user.controllers");
const router = express.Router();
const upload = require("../middlewares/multer.middleware");
const verifyJwt = require("../middlewares/auth.middleware");

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

// secured routes

router.route("/logout").post(verifyJwt, logoutUser);

module.exports = router;
