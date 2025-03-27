"use strict";

const { database } = require("../../constants");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      database.MODELS.ROLE,
      [
        {
          name: "seller",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "buyer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "super_admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "receptionist",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(database.MODELS.ROLE, null, {});
  },
};
