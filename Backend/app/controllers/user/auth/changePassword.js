const bcrypt = require("bcrypt");
const User = require("../../../../sequelize/models/user");

const changePassword = async (req, res) => {
  try {
    const { id: userId } = req.user; // Assuming userId is available in req.user
    const { currentPassword, newPassword } = req.body;

    // Fetch user from the database
    const user = await User.findByPk(userId);

    // Check if the user exists
    if (!user) {
      return res.status(200).json({
        success: false,
        message: "User not found",
      });
    }

    // Verify current password
    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(200).json({
        success: false,
        message: "Current password is incorrect",
      });
    }

    // Update user's password
    await user.update({ password: newPassword });

    return res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error while changing password",
      error: error.message,
    });
  }
};

module.exports = changePassword;
