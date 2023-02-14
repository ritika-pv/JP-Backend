const express = require('express');
const { getCategories,getCategorybySlug,createCategory, updateCategory, deleteCategory } = require('../controller/home_controller');

const router = express.Router();


router.route('/category').get(getCategories);
router.route('/category/:slug').get(getCategorybySlug);
router.route('/category/new').post(createCategory);
router.route("/category/:_id").put(updateCategory).delete(deleteCategory);
module.exports = router;
