const applyForJob = require("./application/applyForJob");
const deleteApplication = require("./application/deleteApplication");
const getApplications = require("./application/getApplications");
const getSingleApplication = require("./application/getSingleApplication");

module.exports = {
  applyForJob,
  getApplications,
  getSingleApplication,
  deleteApplication,
};
