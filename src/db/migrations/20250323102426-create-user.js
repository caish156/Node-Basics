"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      first_name: { type: Sequelize.STRING, allowNull: false },
      last_name: { type: Sequelize.STRING, allowNull: false },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: "Address line 1 cannot be empty!" } },
      },
      address_line_2: Sequelize.STRING,
      state: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: "State cannot be empty!" } },
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "City cannot be empty!",
          },
        },
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: {
            arg: /^\d{6}$/,
            msg: "Zip code should be 5-digit with optional 4-digit",
          },
        },
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^(?:\+91|91)?[6789]\d{9}$/,
            msg: "Invalid phone number format",
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            msg: "Invalid E-mail id format",
          },
        },
      },
      role_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "roles", key: "id" },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
