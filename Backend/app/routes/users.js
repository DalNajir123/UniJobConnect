const express = require("express");
const router = express.Router();
const {
  userSignUpValidation,
  userLoginValidation,
} = require("../../services/validations/userValidations");
const verifyJwtToken = require("../middlewares/authMiddleware");
const bodyErrorSender = require("../middlewares/bodyErrorSender");
const { createUser, userLogin } = require("../controllers/user/auth");

router.post("/sign-up", userSignUpValidation, bodyErrorSender, createUser);
router.post("/login", userLoginValidation, bodyErrorSender, userLogin);

router.get("/test-jwt", verifyJwtToken, (req, res) => {
  return res.status(200).send({
    success: true,
    message: "Test Success",
  });
});

module.exports = router;
