const User = require("../../../../sequelize/models/user");

const updateUser = async (req, res) => {
  try {
    // Assuming you have access to the authenticated user's ID in req.user
    const userId = req.user.id;

    // Destructure fields from request body
    const { firstName, lastName, phone } = req.body;

    // Find the user by ID
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Update user attributes
    user.firstName = firstName;
    user.lastName = lastName;
    user.phone = phone;

    // Save changes to the database
    await user.save();

    return res.status(200).send({
      success: true,
      message: "User profile updated successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Internal server error while updating user profile",
      error,
    });
  }
};

module.exports = updateUser;
