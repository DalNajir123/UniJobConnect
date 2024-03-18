const Application = require("./application");
const Job = require("./job");
const User = require("./user");

Application.belongsTo(Job, { foreignKey: "jobId" });
Application.belongsTo(User, { foreignKey: "userId" });
