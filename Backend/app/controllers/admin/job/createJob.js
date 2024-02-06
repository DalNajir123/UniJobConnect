const Job = require("../../../../sequelize/models/job");

const createJob = (req, res) => {
  try {
    const { title, description } = req.body;

    Job.create({ title, description })
      .then((data) => {
        return res.status(200).json({
          success: true,
          message: "Job created successfully",
          data,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          success: false,
          message: "Job not created",
          error,
        });
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error while creating a job",
    });
  }
};

module.exports = createJob;
