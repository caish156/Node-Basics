const express = require("express");
const { endPoints } = require("./constants");
const { router } = require("./routes/index.js");
const { errorMiddleware } = require("./middlewares/error.js");
const app = express();

app.use(express.json());
app.use(endPoints.ROOT, router);

app.use((error, req, res, next) => {
  errorMiddleware({ error, req, res });
});
app.listen(4870, () => {
  console.log("server is running on port 4870");
});
