const express = require("express");
const { endPoints } = require("./constants");
const { router } = require("./routes/index.js");
const dotenv = require("dotenv").config({ path: __dirname + "../../.env" });
const { errorMiddleware } = require("./middlewares/error.js");
const app = express()

app.use(express.json());
app.use(endPoints.ROOT, router);

app.use((error, req, res, next) => {
  errorMiddleware({ error, req, res });
});
app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
  console.log(`server is running on port ${process.env.PORT}`);
});
