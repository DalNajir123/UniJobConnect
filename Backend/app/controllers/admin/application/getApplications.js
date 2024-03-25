const { Op } = require("sequelize");
const Application = require("../../../../sequelize/models/application");
const Job = require("../../../../sequelize/models/job");

const getApplicationsAdmin = async (req, res) => {
  try {
    const { page = 1, pageSize = 10, title, description } = req.query;

    const offset = (page - 1) * pageSize;

    // Construct the where clause for filtering by job title and description
    const whereClause = {};
    if (title) {
      whereClause["$Job.title$"] = { [Op.like]: `%${title}%` };
    }
    if (description) {
      whereClause["$Job.description$"] = { [Op.like]: `%${description}%` };
    }

    // Find all applications with associated job data
    const { count, rows: applications } = await Application.findAndCountAll({
      include: [
        {
          model: Job,
          where: whereClause,
          required: true,
        },
      ],
      limit: parseInt(pageSize),
      offset: offset,
      order: [["createdAt", "DESC"]], // Order by createdAt in descending order
    });

    return res.status(200).json({
      success: true,
      message: "Job applications fetched successfully",
      data: applications,
      total: count,
      totalPages: Math.ceil(count / pageSize),
    });
  } catch (error) {
    console.error("Error fetching job applications:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error while fetching job applications",
      error: error.message,
    });
  }
};

module.exports = getApplicationsAdmin;
