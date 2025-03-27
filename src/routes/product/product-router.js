const { Router } = require("express");
const { endPoints, strings } = require("../../constants");
const { addProduct } = require("../../controller/product-controller");

const productRouter = Router();

// Login Route For user

productRouter.post(endPoints.ADD, addProduct);

// productRouter.get(
//   endPoints.BASE,
//   authenticate([strings.ROLES.ADMIN, strings.ROLES.SUPER_ADMIN]),
//   getAllUser
// );

// productRouter.put(endPoints.BASE, (req, res) => {
//   res.send("success");
// });

// productRouter.delete(endPoints.BASE, (req, res) => {
//   console.log("user delete request hit");
//   res.send("success");
// });

module.exports = { productRouter };
