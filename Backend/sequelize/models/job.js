const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Job = sequelize.define("Job", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  requirements: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  jobType: {
    type: DataTypes.ENUM("fullTime", "partTime"),
    allowNull: true,
  },
  locationType: {
    type: DataTypes.ENUM("onSite", "remote", "hybrid"),
    allowNull: true,
  },
  createdBy: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  updatedBy: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
});

module.exports = Job;
