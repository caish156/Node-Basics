const { messages, httpCodes } = require("../constants");
const { addProductService } = require("../services/product-service");
const { sendSuccessResponse } = require("../utils");

module.exports.addProduct = async (req, res, next) => {
  try {
    const loginData = await addProductService(req);
    return sendSuccessResponse(res, messages.PRODUCT.ADDED, {
      ...loginData,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllProduct = async (req, res, next) => {
  try {
    const userData = await getAllProductService(req);
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
