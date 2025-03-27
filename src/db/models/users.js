"use strict";
const { database } = require("../../constants");
const { generateHashedString } = require("../../utils");

module.exports = ({ sequelize, DataTypes, validator, Model }) => {
  // const { validator } = sequelize;
  class User extends Model {
    static associate(models) {
      this.belongsTo(models[database.MODELS.ROLE], {
        foreignKey: {
          name: database.COLUMNS.ROLE.ROLE_ID,
        },
        as: database.MODELS.ROLE,
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      first_name: { type: DataTypes.STRING, allowNull: false },
      last_name: { type: DataTypes.STRING, allowNull: false },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: "Address line 1 cannot be empty!" } },
      },
      address_line_2: DataTypes.STRING,
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: "State cannot be empty!" } },
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "City cannot be empty!",
          },
        },
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: {
            arg: /^\d{6}$/,
            msg: "Zip code should be 5-digit with optional 4-digit",
          },
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^(?:\+91|91)?[6789]\d{9}$/,
            msg: "Invalid phone number format",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            msg: "Invalid E-mail id format",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        defaultValue: null,
        set(value) {
          const hashedPassword = generateHashedString(value);
          this.setDataValue("password", hashedPassword);
        },
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: database.MODELS.ROLE,
          key: "id",
        },
      },
      active: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      sequelize,
      modelName: database.MODELS.USER,
    }
  );
  return User;
};
