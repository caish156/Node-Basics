const { Router } = require("express");
const { userRouter } = require("./user/user-router");
const { endPoints } = require("../constants");
const { productRouter } = require("./product/product-router");

const router = Router();

router.use(
  endPoints.USER,
  (req, res, next) => {
    next();
  },
  userRouter
);

router.use(
  endPoints.PRODUCT,
  (req, res, next) => {
    next();
  },
  productRouter
);

module.exports = { router };
