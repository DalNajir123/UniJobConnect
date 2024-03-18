const Application = require("../../../../sequelize/models/application");
const Job = require("../../../../sequelize/models/job");

const applyForJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { id: userId } = req.user; // Assuming you have a userId in req.user

    // Check if the job exists
    const job = await Job.findByPk(jobId);
    if (!job) {
      return res.status(200).json({
        success: false,
        message: "Job not found",
      });
    }

    // Check if the user has already applied for this job
    const existingApplication = await Application.findOne({
      where: {
        jobId,
        userId,
      },
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this job",
      });
    }

    // Create a new application
    const application = await Application.create({
      jobId,
      userId,
      status: "pending",
    });

    return res.status(200).json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error while applying for the job",
      error,
    });
  }
};

module.exports = applyForJob;
