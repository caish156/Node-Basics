const { httpCodes } = require("../../constants");
const { CustomeError } = require("../../utils");
const mdb = require("../models");

module.exports.createProduct = async (productData) => {
  try {
    await mdb.Product.create(productData);
  } catch (error) {
    throw new CustomeError(error.message, httpCodes.SERVICE_UNAVAILABLE);
  }
};
module.exports.getProducts = async (req, res) => {
  try {
    const products = await mdb.Product.find(); // Like Sequelize.findAll()
    return products;
  } catch (error) {
    next(error);
  }
};
