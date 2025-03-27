const { sendErrorResponse } = require("../utils");

module.exports.errorMiddleware = ({ error, req, res }) => {
   //console log error

  // logger(
  //   `${messages.LOGGER.ERROR_OCCURRED} - ${strings.SERVER.METHOD}: ${req.method}, ${strings.SERVER.URL}: ${req.url}`,
  //   strings.LOGGER.LEVELS.ERROR,
  //   error
  // );

  sendErrorResponse({ res, error }); // send error as response
};
