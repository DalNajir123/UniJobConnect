const Job = require("../../../../sequelize/models/job");

const getJobs = async (req, res) => {
  try {
    const { page = 1, pageSize = 10 } = req.query;

    const offset = (page - 1) * pageSize;

    const jobs = await Job.findAll({
      attributes: [
        "id",
        "title",
        "description",
        "requirements",
        "address",
        "companyName",
        "city",
        "state",
        "country",
        "jobType",
        "locationType",
        "createdAt",
        "updatedAt",
      ],
      limit: parseInt(pageSize),
      offset: offset,
      order: [["createdAt", "DESC"]], // Order by createdAt in descending order
    });

    return res.status(200).json({
      success: true,
      message: "Jobs fetched successfully",
      data: jobs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error while fetching jobs",
      error,
    });
  }
};

module.exports = getJobs;
