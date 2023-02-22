const Menu = require('../models/menuModel');
const catchAsyncErrors = require("../middleware/catchAsyncError");

//Create MenuItems --Admin Only
exports.createMenuItem = catchAsyncErrors(async(req,res,next)=>{
    const menu = await Menu.create(req.body);
    res.status(201).json({success:true,menu})
})