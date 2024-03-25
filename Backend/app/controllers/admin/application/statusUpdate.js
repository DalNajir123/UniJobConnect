const Application = require("../../../../sequelize/models/application");

const updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params; // Application ID
    const { status } = req.body; // Updated status

    // Find the application by ID
    const application = await Application.findByPk(id);

    if (!application) {
      return res.status(200).json({
        success: false,
        message: "Application not found",
      });
    }

    // Update the status
    application.status = status;

    // Save the updated application
    await application.save();

    return res.status(200).json({
      success: true,
      message: "Application status updated successfully",
      data: application,
    });
  } catch (error) {
    console.error("Error updating application status:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error while updating application status",
      error: error.message,
    });
  }
};

module.exports = updateApplicationStatus;
