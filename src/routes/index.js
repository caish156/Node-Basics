const { Router } = require("express");
const { userRouter } = require("./user/user-router");
const { endPoints } = require("../constants");

const router = Router();

router.use(
  endPoints.USER,
  (req, res, next) => {
    console.log("arrived here");
    next();
  },
  userRouter
);

module.exports = { router };
