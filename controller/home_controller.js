const Category = require('../models/category');
const catchAsyncErrors = require("../middleware/catchAsyncError");

//Create Category--Admin Only
//Get-Category
module.exports ={
    getCategorybySlug: async(req,res)=>{

        const {slug} = req.params;

        // search slug category
        const matchedCategory = await Category.find({ slug: { $regex: slug ,$options: 'i' }}).populate({
            path: 'referencedModel',
            select: '-field3 -field4',
          });
        return res.status(200).json({success:true,matchedCategory , message  :'Category found successfully'})

    },

    getCategories : async(req,res)=>{
        const category = await Category.find().populate('menu_item_id');
        res.status(200).json({success:true,category})
    },

    createCategory : catchAsyncErrors(async(req,res,next)=>{
        const category  = await Category.create(req.body);
        res.status(201).json({success:true,category}); 
    })
    
}