const express = require("express");
const {
  createMenuItem,
  getMenuItems,
} = require("../controller/menu_controller");

const router = express.Router();

router.route("/menu/new").post(createMenuItem);
router.route("/get-items").get(getMenuItems);
module.exports = router;
