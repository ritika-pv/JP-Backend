const express = require('express');
const { getCategories,getCategorybySlug,createCategory } = require('../controller/home_controller');

const router = express.Router();


router.route('/category').get(getCategories);
router.route('/category/:slug').get(getCategorybySlug);
router.route('/category/new').post(createCategory);
module.exports = router;
