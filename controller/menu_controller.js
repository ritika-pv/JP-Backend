const Menu = require("../models/menuModel");
const catchAsyncErrors = require("../middleware/catchAsyncError");

//Create MenuItems --Admin Only
module.exports = {
  createMenuItem: catchAsyncErrors(async (req, res, next) => {
    const menu = await Menu.create(req.body);
    res.status(201).json({ success: true, menu });
  }),
  getMenuItems: catchAsyncErrors(async(req,res,next)=>{
    const items = await  Menu.find().sort({ratings:-1});
    res.status(200).json({success:true,items})
  })
};