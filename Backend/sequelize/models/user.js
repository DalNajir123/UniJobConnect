const { DataTypes, ENUM } = require("sequelize");
const sequelize = require("../config/sequelize");
const bcrypt = require("bcrypt");

const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "candidate"),
      defaultValue: "candidate",
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(password) {
        if (password) {
          const hashedPassword = bcrypt.hashSync(
            password,
            bcrypt.genSaltSync(Number(process.env.SALT))
          );
          this.setDataValue("password", hashedPassword);
        }
      },
    },
  },
  {
    // Other model options go here
  }
);

module.exports = User;
