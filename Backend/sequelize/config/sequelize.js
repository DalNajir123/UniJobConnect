const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DEVELOPMENT_DB_NAME,
  process.env.DEVELOPMENT_DB_USERNAME,
  process.env.DEVELOPMENT_DB_PASSWORD,
  {
    host: process.env.DEVELOPMENT_DB_HOST,
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
