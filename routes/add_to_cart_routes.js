const express = require("express");
const { addToCart, getCart } = require("../controller/add_to_cart_controller");
const router = express.Router();

router.route("/add-to-cart").post(addToCart);
router.route("/get-cart/:user_id").get(getCart);
module.exports = router;
