const express = require("express");
const {
  createJob,
  getJobs,
  getJobById,
  deleteJobById,
  updateJobById,
} = require("../controllers/admin/job");
const verifyJwtToken = require("../middlewares/authMiddleware");
const router = express.Router();

// Define routes for job CRUD operations
router.post("/create", verifyJwtToken, createJob);
router.put("/update/:id", verifyJwtToken, updateJobById);
router.get("/get", getJobs);
router.get("/get/:id", getJobById);
router.delete("/delete/:id", verifyJwtToken, deleteJobById);

module.exports = router;
