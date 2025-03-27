"use strict";
const { database } = require("../../constants");
const { generateHashedString } = require("../../utils");

module.exports = ({ sequelize, DataTypes, validator, Model }) => {
  // const { validator } = sequelize;
  class Role extends Model {
    static associate(models) {
      this.hasMany(models[database.MODELS.USER], {
        foreignKey: {
          name: database.COLUMNS.ROLE.ROLE_ID,
        },
        as: database.MODELS.ROLE,
      });
    }
  }
  Role.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: database.MODELS.ROLE,
    }
  );
  return Role;
};
