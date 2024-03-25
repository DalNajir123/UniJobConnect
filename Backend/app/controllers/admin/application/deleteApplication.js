// deleteApplication.js

const Application = require("../../../../sequelize/models/application");

const deleteApplication = async (req, res) => {
  try {
    const { applicationId } = req.params;

    // Check if the application exists
    const application = await Application.findByPk(applicationId);
    if (!application) {
      return res.status(200).json({
        success: false,
        message: "Application not found",
      });
    }

    // Delete the application
    await application.destroy();

    return res.status(200).json({
      success: true,
      message: "Application deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error while deleting the application",
      error,
    });
  }
};

module.exports = deleteApplication;
