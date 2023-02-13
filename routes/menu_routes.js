const express = require('express');
const{createMenuItem} = require('../controller/menu_controller');

const router = express.Router();

router.route('/menu/new').post(createMenuItem);
module.exports = router;