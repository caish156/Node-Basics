const express = require("express");
const { endPoints } = require("./constants");
const { router } = require("./routes/index.js");
const { connectWithDatabase } = require("./config/sequlize-config.js");
const app = express();

app.use(express.json());
connectWithDatabase();
app.use(
  endPoints.ROOT,
  (req, res, next) => {
    next();
  },
  router
);

app.listen(4870, () => {
  console.log("server is running on port 4870");
});
