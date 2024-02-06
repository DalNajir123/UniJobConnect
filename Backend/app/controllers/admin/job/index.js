const createJob = require("./createJob");
const deleteJobById = require("./deleteJobById");
const getJobById = require("./getJobById");
const getJobs = require("./getJobs");
const updateJobById = require("./updateJobById");

module.exports = {
  createJob,
  getJobs,
  getJobById,
  deleteJobById,
  updateJobById,
};
