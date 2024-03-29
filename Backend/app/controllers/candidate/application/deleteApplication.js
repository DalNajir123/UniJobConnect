const Application = require("../../../../sequelize/models/application");

const deleteApplication = async (req, res) => {
  try {
    const { applicationId } = req.params;
    const { id } = req.user; // Assuming userId is available in req.user

    // Check if the application exists and belongs to the requesting user
    const application = await Application.findOne({
      where: { id: applicationId, userId: id },
    });

    if (!application) {
      return res.status(200).json({
        success: false,
        message: "Application not found or you are not authorized to delete it",
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
      error: error.message,
    });
  }
};

module.exports = deleteApplication;
