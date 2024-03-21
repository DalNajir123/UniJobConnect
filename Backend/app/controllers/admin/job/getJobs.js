const { Op } = require("sequelize");
const Job = require("../../../../sequelize/models/job");

const getJobs = async (req, res) => {
  try {
    const { page = 1, pageSize = 10, title, description } = req.query;

    const offset = (page - 1) * pageSize;

    // Construct the where clause for filtering by job title and description
    const whereClause = {};
    if (title) {
      whereClause.title = { [Op.like]: `%${title}%` };
    }
    if (description) {
      whereClause.description = { [Op.like]: `%${description}%` };
    }

    // Find total count of jobs
    const totalCount = await Job.count({ where: whereClause });

    // Find paginated jobs with filtering
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
      where: whereClause,
      limit: parseInt(pageSize),
      offset: offset,
      order: [["createdAt", "DESC"]], // Order by createdAt in descending order
    });

    return res.status(200).json({
      success: true,
      message: "Jobs fetched successfully",
      data: jobs,
      pagination: {
        currentPage: parseInt(page),
        pageSize: parseInt(pageSize),
        totalCount: totalCount,
        totalPages: Math.ceil(totalCount / pageSize),
      },
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
