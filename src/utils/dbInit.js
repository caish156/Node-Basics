const { sequelize } = require("sequelize");
const pgp = require("pg-promise")();
const dotenv = require("dotenv");

dotenv.config({ path: __dirname + "/../../.env" });

const db = pgp({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "postgres",
});

module.exports.checkAndCreateDatabase = async () => {
  try {
    const dbName = process.env.DB_NAME;

    const result = await db.oneOrNone(
      "SELECT 1 FROM pg_database where datname = $1",
      [dbName]
    );
    if (!result) {
      console.log(`Database '${dbName}' does not exist. Creating now...`);
      await db.none(`CREATE DATABASE ${dbName}`);
      console.log(`Database '${dbName}' created successfully.`);
    } else {
      console.log(`Database '${dbName}' Already exist`);
    }

    db.$pool.end();
  } catch (error) {
    console.error("❌ Error checking/creating database:", error);
  }
};
