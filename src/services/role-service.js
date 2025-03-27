const { database } = require("../constants");
const db = require("../db/models");

module.exports.getRoleById = async (id) => {
  const role = await db[database.MODELS.ROLE].findByPk(id);
  return role.name;
};
