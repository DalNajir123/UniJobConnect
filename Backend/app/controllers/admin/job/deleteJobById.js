const Job = require("../../../../sequelize/models/job");

const deleteJobById = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findByPk(jobId);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    await job.destroy();

    return res.status(200).end();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error while deleting a job",
      error,
    });
  }
};

module.exports = deleteJobById;
