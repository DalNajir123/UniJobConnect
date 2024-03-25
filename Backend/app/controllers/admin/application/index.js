const deleteApplication = require("./deleteApplication");
const getApplicationsAdmin = require("./getApplications");
const updateApplicationStatus = require("./statusUpdate");

module.exports = {
  getApplicationsAdmin,
  updateApplicationStatus,
  deleteApplication,
};
