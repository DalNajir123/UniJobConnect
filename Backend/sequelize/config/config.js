// const fs = require('fs');
require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DEVELOPMENT_DB_USERNAME,
    password: process.env.DEVELOPMENT_DB_PASSWORD,
    database: process.env.DEVELOPMENT_DB_NAME,
    host: process.env.DEVELOPMENT_DB_HOST,
    port: process.env.DEVELOPMENT_DB_PORT,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: process.env.CI_DB_HOST,
    port: process.env.CI_DB_PORT,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true,
      ssl: {
        // ca: fs.readFileSync(__dirname + '/mysql-ca-main.crt')
      }
    }
  }
};