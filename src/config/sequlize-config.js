const { checkAndCreateDatabase } = require("../utils/dbInit.js");
const { Sequelize } = require("sequelize");
const config = require("../db/config/config.js");
const string = require("../constants");

const sequelizeConfig = new Sequelize({
  ...config[process.env.NODE_ENV],
  logging: false,
});

// Creates connection to postgres database.
const connectWithDatabase = async () => {
  try {
    await checkAndCreateDatabase();
    await sequelizeConfig.authenticate();
    await sequelizeConfig.sync();
    console.log("Database connected successfully!");
    // logger(messages.DB.CONNECTION_DONE, strings.LOGGER.LEVELS.INFO);
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
    // logger(messages.DB.CONNECTION_FAILED, strings.LOGGER.LEVELS.ERROR, error);
  }
};

module.exports = { sequelizeConfig, connectWithDatabase };
