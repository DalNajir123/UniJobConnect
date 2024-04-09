const express = require("express");
const router = express.Router();
const {
  userSignUpValidation,
  userLoginValidation,
} = require("../../services/validations/userValidations");
const verifyJwtToken = require("../middlewares/authMiddleware");
const bodyErrorSender = require("../middlewares/bodyErrorSender");
const {
  createUser,
  userLogin,
  changePassword,
} = require("../controllers/user/auth");
const getUserData = require("../controllers/user/auth/getUserData");

router.post("/sign-up", userSignUpValidation, bodyErrorSender, createUser);
router.post("/login", userLoginValidation, bodyErrorSender, userLogin);
router.post("/change-password", verifyJwtToken, changePassword);
router.get("/self-data", verifyJwtToken, getUserData);

router.get("/test-jwt", verifyJwtToken, (req, res) => {
  return res.status(200).send({
    success: true,
    message: "Test Success",
  });
});

module.exports = router;
