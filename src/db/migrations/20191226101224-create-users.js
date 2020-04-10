"use strict";
module.exports = {
  up: async (queryInterface, sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        type: sequelize.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true
      },
      firstName: { type: sequelize.STRING },
      lastName: { type: sequelize.STRING },
      username: { type: sequelize.STRING },
      email: { type: sequelize.STRING },
      password: { type: sequelize.STRING },
      createdAt: {
        allowNull: false,
        type: sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: sequelize.DATE
      }
    });
  },
  down: async (queryInterface, sequelize) => {
    return queryInterface.dropTable("Users");
  }
};
