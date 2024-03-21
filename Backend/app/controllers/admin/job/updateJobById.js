const Job = require("../../../../sequelize/models/job");

const updateJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const {
      title,
      description,
      requirements,
      companyName,
      address,
      city,
      state,
      country,
      jobType,
      locationType,
    } = req.body;

    const job = await Job.findByPk(jobId);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    // Update job attributes
    job.title = title || job.title;
    job.description = description || job.description;
    job.requirements = requirements || job.requirements;
    job.address = address || job.address;
    job.city = city || job.city;
    job.state = state || job.state;
    job.country = country || job.country;
    job.jobType = jobType || job.jobType;
    job.locationType = locationType || job.locationType;
    job.companyName = companyName || job.companyName;

    // Set the updatedBy field
    job.updatedBy = req.user.id;

    // Save the changes to the database
    await job.save();

    return res.status(200).json({
      success: true,
      message: "Job updated successfully",
      data: job,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error while updating a job",
      error,
    });
  }
};

module.exports = updateJobById;
