const e = require("express");
const { messages, httpCodes } = require("../constants");

module.exports.sendSuccessResponse = (
  response,
  responseMessage,
  responseData = null,
  statusCode = httpCodes.SUCCESS,
  count
) => {
  return response.status(statusCode).json({
    status: messages.APP.SUCCESS,
    message: responseMessage || messages.APP.SUCCESS_RESULT,
    count,
    data: responseData,
  });
};

module.exports.sendErrorResponse = ({
  res,
  error,
  statusCode = error.statusCode ?? httpCodes.INTERNAL_SERVER_ERROR,
}) => {
  console.log("sendErrorResponse =====>", error.message,error.statusCode)
  return res.status(statusCode).json({
    status: messages.APP.ERROR,
    message: error.message || messages.APP.SERVER_ERROR,
  });
};
