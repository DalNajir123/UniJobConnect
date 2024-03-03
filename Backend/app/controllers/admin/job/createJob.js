const Job = require("../../../../sequelize/models/job");

const createJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      address,
      city,
      state,
      country,
      jobType,
      locationType,
    } = req.body;

    const job = await Job.create({
      title,
      description,
      requirements,
      address,
      city,
      state,
      country,
      jobType,
      locationType,
    });

    return res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: job,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error while creating a job",
      error,
    });
  }
};

module.exports = createJob;
