const express = require('express');
const {createState,getStates} = require('../controller/state_controller');

const router = express.Router();

router.route('/state/new').post(createState);
router.route('/get-states').get(getStates);

module.exports = router;