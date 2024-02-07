const { check } = require("express-validator");
const User = require("../../sequelize/models/user");
const bcrypt = require("bcrypt");

const userSignUpValidation = [
  check("firstName", "Invalid First Name")
    .not()
    .notEmpty()
    .isLength({ min: 3 }),
  check("lastName", "Invalid Last Name").not().notEmpty().isLength({ min: 2 }),
  check("email", "Invalid Email")
    .not()
    .notEmpty()
    .isEmail()
    .custom((value, { req }) => {
      if (!value) return false;
      return new Promise((resolve, reject) => {
        User.findOne({
          where: {
            email: req.body.email,
          },
        })
          .then((result) => {
            if (result) {
              reject(new Error("E-mail already in use"));
            } else {
              resolve(true);
            }
          })
          .catch(() => {
            reject(new Error("Internal server error"));
          });
      });
    }),
  check("phone", "Invalid Phone Number")
    .not()
    .notEmpty()
    .isLength({ min: 10, max: 14 })
    .custom((value, { req }) => {
      if (!value) return false;

      return new Promise((resolve, reject) => {
        User.findOne({
          where: {
            phone: req.body.phone,
          },
        })
          .then((result) => {
            if (result) {
              reject(new Error("Phone number already in use"));
            } else {
              resolve(true);
            }
          })
          .catch(() => {
            reject(new Error("Internal server error"));
          });
      });
    }),
  check("password", "Invalid Password")
    .not()
    .notEmpty()
    .isLength({ min: 4, max: 10 }),
];

const userLoginValidation = [
  check("email", "Invalid Email")
    .not()
    .notEmpty()
    .isEmail()
    .custom((value, { req }) => {
      if (!value) return false;

      return new Promise((resolve, reject) => {
        User.findOne({
          where: {
            email: req.body.email,
          },
        })
          .then((result) => {
            if (!result) {
              reject(new Error("E-mail not found"));
            } else {
              resolve(true);
            }
          })
          .catch(() => {
            reject(new Error("Internal server error"));
          });
      });
    }),
  check("password", "Invalid Password")
    .not()
    .notEmpty()
    .isLength({ min: 4, max: 10 })
    .custom((value, { req }) => {
      if (!value) return false;

      return new Promise(async (resolve, reject) => {
        const userPassword = await User.findOne({
          where: {
            email: req.body.email,
          },
          attributes: ["password"],
          raw: true,
        });

        if (!userPassword) {
          return reject(false);
        }

        const isPasswordOk = await bcrypt.compare(
          req.body.password,
          userPassword.password
        );

        if (isPasswordOk) {
          return resolve(true);
        } else {
          return reject(new Error("Invalid password"));
        }
      });
    }),
];

module.exports = { userSignUpValidation, userLoginValidation };
