const User = require("../../../../sequelize/models/user");

const getUserData = async (req, res) => {
  try {
    // Assuming you have access to the authenticated user's data in req.user
    const userId = req.user.id;

    // Fetch user data from the database based on the authenticated user's ID
    const user = await User.findByPk(userId, {
      attributes: { exclude: ["password"] }, // Exclude password field from the response
    });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Respond with the user's data
    return res.status(200).send({
      success: true,
      message: "User data fetched successfully",
      data: user,
    });
  } catch (error) {
    // Handle errors
    return res.status(500).send({
      success: false,
      message: "Internal server error while fetching user data",
      error,
    });
  }
};

module.exports = getUserData;
