"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("jobs", "createdBy", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.addColumn("jobs", "updatedBy", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("jobs", "createdBy");
    await queryInterface.removeColumn("jobs", "updatedBy");
  },
};
