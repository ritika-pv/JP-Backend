const Category = require('../models/category');
const catchAsyncErrors = require("../middleware/catchAsyncError");

//Create Category--Admin Only
exports.createCategory = catchAsyncErrors(async(req,res,next)=>{
    const category  = await Category.create(req.body);
    res.status(201).json({success:true,category}); 
});
//Get-Category
exports.getCategories =async(req,res)=>{
    const category = await Category.find();
    res.status(200).json({success:true,category})
}


//update product 54:09  --admin only
//    delete product--admin only