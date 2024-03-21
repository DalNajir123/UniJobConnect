const { Op } = require("sequelize");
const Application = require("../../../../sequelize/models/application");
const Job = require("../../../../sequelize/models/job");

const getApplications = async (req, res) => {
  try {
    const { id: userId } = req.user; // Assuming you have a userId in req.user

    const { page = 1, pageSize = 10, title, description } = req.query;

    const offset = (page - 1) * pageSize;

    // Construct the where clause for filtering by job title and description
    const whereClause = {
      userId,
    };

    if (title) {
      whereClause["$Job.title$"] = { [Op.like]: `%${title}%` };
    }

    if (description) {
      whereClause["$Job.description$"] = { [Op.like]: `%${description}%` };
    }

    // Find all applications associated with the candidate's userId
    const { count, rows: applications } = await Application.findAndCountAll({
      where: whereClause,
      include: [{ model: Job, where: {}, required: true }], // Include the associated Job data with filtering
      limit: parseInt(pageSize),
      offset: offset,
      order: [["createdAt", "DESC"]], // Order by createdAt in descending order
    });

    return res.status(200).json({
      success: true,
      message: "Candidate's job applications fetched successfully",
      data: applications,
      total: count,
      totalPages: Math.ceil(count / pageSize),
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

module.exports = getApplications;
