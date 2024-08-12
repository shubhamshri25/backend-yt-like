const asyncHandler = require("../utils/asyncHandler");

const registerUser = asyncHandler(async (req, res) => {
 return res.status(200).json({ msg: "Ok" });
});

module.exports = {
  registerUser,
};
