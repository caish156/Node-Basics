const { messages, httpCodes } = require("../constants");
const { createProduct } = require("../mongodb/collections/products");
const { CustomeError } = require("../utils");

module.exports.addProductService = async (req) => {
  try {
    const productData = req.body;
    const data = await createProduct(productData);
  } catch (error) {
    throw new CustomeError(
      messages.PRODUCT.ERROR,
      httpCodes.SERVICE_UNAVAILABLE
    );
  }
};
