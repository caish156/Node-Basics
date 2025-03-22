const { Router } = require("express");
const { endPoints } = require("../../constants");

const userRouter = Router();

userRouter.get(endPoints.BASE, (req, res) => {
  console.log("user get request hit");
  res.send("success");
});

userRouter.post(endPoints.BASE, (req, res) => {
  console.log("user post request hit");
  res.send("success");
});

userRouter.put(endPoints.BASE, (req, res) => {
  console.log("user put request hit");
  res.send("success");
});

userRouter.delete(endPoints.BASE, (req, res) => {
  console.log("user delete request hit");
  res.send("success");
});

module.exports = { userRouter };
