const { messages, httpCodes } = require("../constants");
const { addProductService, getAllProductService } = require("../services");
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

module.exports.getAllProducts = async (req, res, next) => {
  try {
    const productData = await getAllProductService(req);
    console.log(productData)
    return sendSuccessResponse(
      res,
      messages.PRODUCT.DATA_FETCHED,
      productData,
      httpCodes.SUCCESS
    );
  } catch (error) {
    next(error);
  }
};

