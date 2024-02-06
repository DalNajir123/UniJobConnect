const Job = require("../../../../sequelize/models/job");

const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findByPk(jobId);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Job fetched successfully",
      data: job,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error while fetching a job",
      error,
    });
  }
};

module.exports = getJobById;
