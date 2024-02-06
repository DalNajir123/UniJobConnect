const express = require("express");
const {
  createJob,
  getJobs,
  getJobById,
  deleteJobById,
  updateJobById,
} = require("../controllers/admin/job");
const router = express.Router();

// Define routes for job CRUD operations
router.post("/create", createJob);
router.put("/update/:id", updateJobById);
router.get("/get", getJobs);
router.get("/get/:id", getJobById);
router.delete("/delete/:id", deleteJobById);

module.exports = router;
