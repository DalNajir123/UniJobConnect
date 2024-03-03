"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("jobs", "address", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("jobs", "city", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("jobs", "state", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("jobs", "country", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("jobs", "jobType", {
      type: Sequelize.ENUM("fullTime", "partTime"),
      allowNull: true,
    });
    await queryInterface.addColumn("jobs", "locationType", {
      type: Sequelize.ENUM("onSite", "remote", "hybrid"),
      allowNull: true,
    });
    await queryInterface.removeColumn("jobs", "location");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("jobs", "address");
    await queryInterface.removeColumn("jobs", "city");
    await queryInterface.removeColumn("jobs", "state");
    await queryInterface.removeColumn("jobs", "country");
    await queryInterface.removeColumn("jobs", "jobType");
    await queryInterface.removeColumn("jobs", "locationType");
  },
};
