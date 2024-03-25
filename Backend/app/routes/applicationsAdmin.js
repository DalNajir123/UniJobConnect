const express = require("express");
const verifyJwtToken = require("../middlewares/authMiddleware");
const {
  getApplicationsAdmin,
  updateApplicationStatus,
  deleteApplication,
} = require("../controllers/admin/application");

const applicationAdminRouter = express.Router();

applicationAdminRouter.get("/get", verifyJwtToken, getApplicationsAdmin);
applicationAdminRouter.post(
  "/statusUpdate/:id",
  verifyJwtToken,
  updateApplicationStatus
);

applicationAdminRouter.delete(
  "/delete/:applicationId",
  verifyJwtToken,
  deleteApplication
);

module.exports = applicationAdminRouter;
