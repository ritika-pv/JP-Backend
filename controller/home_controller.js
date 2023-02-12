const Category = require('../models/category');


//Create Category--Admin Only
exports.createCategory = async(req,res,next)=>{
    const category  = await Category.create(req.body);
    res.status(201).json({success:true,category}) 
}
//Get-Category
exports.getCategories =async(req,res)=>{
    const category = await Category.find();
    res.status(200).json({success:true,category})
}