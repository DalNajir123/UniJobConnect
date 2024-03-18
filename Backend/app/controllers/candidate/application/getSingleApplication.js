const Application = require("../../../../sequelize/models/application");
const Job = require("../../../../sequelize/models/job");

const getSingleApplication = async (req, res) => {
  try {
    const { id: userId } = req.user; // Assuming you have a userId in req.user
    const { applicationId } = req.params; // Assuming you have a userId in req.user

    // Find all applications associated with the candidate's userId
    const applications = await Application.findOne({
      where: { id: applicationId, userId },
      include: [{ model: Job }], // Include the associated Job data
    });

    return res.status(200).json({
      success: true,
      message: "Candidate's job application fetched successfully",
      data: applications,
    });
  } catch (error) {
    console.error("Error fetching candidate's applications:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error while fetching candidate's applications",
      error: error.message,
    });
  }
};

module.exports = getSingleApplication;
