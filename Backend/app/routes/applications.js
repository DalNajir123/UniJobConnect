const express = require("express");
const {
  applyForJob,
  getApplications,
  getSingleApplication,
  deleteApplication,
} = require("../controllers/candidate");
const verifyJwtToken = require("../middlewares/authMiddleware");

const applicationRouter = express.Router();

applicationRouter.post("/create/:jobId", verifyJwtToken, applyForJob);
applicationRouter.get("/get", verifyJwtToken, getApplications);
applicationRouter.get(
  "/get/:applicationId",
  verifyJwtToken,
  getSingleApplication
);
applicationRouter.delete(
  "/delete/:applicationId",
  verifyJwtToken,
  deleteApplication
);

module.exports = applicationRouter;
