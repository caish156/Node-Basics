const { appConfigs } = require("./app-config");
const { sequelize, connectWithDatabase } = require("./sequlize-config");

module.exports = {
  appConfigs,
  sequelize,
  connectWithDatabase,
};
