const express = require("express");
const { endPoints } = require("./constants");
const { router } = require("./routes/index.js");
const app = express();

// app.use(express.json());

app.use(
  endPoints.ROOT,
  (req, res, next) => {
    console.log("received");
    next();
  },
  router
);

app.listen(4870, () => {
  console.log("server is running on port 4870");
});
