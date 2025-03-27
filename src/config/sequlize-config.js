const { checkAndCreateDatabase } = require("../utils/db-utils.js");
const { Sequelize } = require("sequelize");
const config = require("../db/config/config.js");

const sequelize = new Sequelize({
  ...config[process.env.NODE_ENV],
  logging: false,
  define: {
    freezeTableName: true,
  },
});

// Creates connection to postgres database.
const connectWithDatabase = async () => {
  try {
    await checkAndCreateDatabase();
    await sequelize.authenticate();
    await sequelize.sync({ force: false, alter: true });
    console.log("Database connected successfully!");
    // logger(messages.DB.CONNECTION_DONE, strings.LOGGER.LEVELS.INFO);
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
    // logger(messages.DB.CONNECTION_FAILED, strings.LOGGER.LEVELS.ERROR, error);
  }
};

module.exports = { sequelize, connectWithDatabase };
