const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const { connectDB } = require("../config/config");
const basename = path.basename(__filename);
const mdb = {};

connectDB();
// Read all model files dynamically
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file !== basename && // Ignore this file
      path.extname(file) === ".js" && // Only `.js` files
      !file.endsWith(".test.js") // Ignore test files
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(mongoose); // Pass mongoose
    mdb[model.modelName] = model;
  });

// Initialize all models (ensures collections are created)
async function initModels() {
  try {
    await Promise.all(Object.values(mdb).map((model) => model.init()));
    console.log("All models initialized!",mdb);
  } catch (error) {
    console.error("Error initializing models:", error);
  }
}

initModels();
module.exports = mdb;
