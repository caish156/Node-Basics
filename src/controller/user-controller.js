const { messages, httpCodes } = require("../constants");
const {
  getAllUSerService,
  loginUserService,
} = require("../services/user-service");
const { sendSuccessResponse } = require("../utils");

module.exports.loginUser = async (req, res, next) => {
  try {
    const loginData = await loginUserService(req);
    return sendSuccessResponse(res, messages.AUTH.LOGIN_SUCCESS, {
      ...loginData,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllUser = async (req, res, next) => {
  try {
    const userData = await getAllUSerService(req);
    return sendSuccessResponse(
      res,
      messages.USER.DATA_FETCHED,
      userData,
      httpCodes.SUCCESS
    );
  } catch (error) {
    next(error);
  }
};
