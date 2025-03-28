const { messages, httpCodes } = require("../constants");
const { createProduct, getAllProducts } = require("../mongodb/collections/products");
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
module.exports.getAllProductService = async (req) => {
  try {
    const data = await getAllProducts();
    if (!data) {
      console.log('second')
      throw new CustomeError(messages.PRODUCT.NOT_FOUND);
    }
    return data;
  } catch (error) {
    console.log('first')
    throw new CustomeError(
      messages.PRODUCT.ERROR,
      httpCodes.INTERNAL_SERVER_ERROR
    );
  }
};
