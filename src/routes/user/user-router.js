const { Router } = require("express");
const { endPoints, strings } = require("../../constants");
const { loginUser, getAllUser } = require("../../controller");
const { authenticate } = require("../../middlewares/auth");

const userRouter = Router();

// Login Route For user

userRouter.post(endPoints.LOGIN, loginUser);

userRouter.get(
  endPoints.BASE,
  authenticate([strings.ROLES.ADMIN, strings.ROLES.SUPER_ADMIN]),
  getAllUser
);

userRouter.put(endPoints.BASE, (req, res) => {
  res.send("success");
});

userRouter.delete(endPoints.BASE, (req, res) => {
  console.log("user delete request hit");
  res.send("success");
});

module.exports = { userRouter };
