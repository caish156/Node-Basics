// const fs = require("fs");
// const path = require("path");
// const mdb = require("../models");
// const basename = path.basename(__filename);
// console.log(mdb)
// // Read all model files dynamically
// fs.readdirSync(__dirname)
//   .filter(
//     (file) =>
//       file !== basename && // Ignore this file
//       path.extname(file) === ".js" && // Only `.js` files
//       !file.endsWith(".test.js") // Ignore test files
//   )
//   .forEach( async (file) => {
//     await require(path.join(__dirname, file))(mdb); // Pass mdb
//   });

