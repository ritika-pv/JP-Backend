//to provide specific rights to specific user
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors=require("./catchAsyncError");
const jwt=require("jsonwebtoken");
const User=require("../models/userModel")

//used to check if user is logged in or not
exports.isAuthenticatedUser=catchAsyncErrors(async(req,res,next)=>{
    const {token}=req.cookies;
   // console.log(token);
   if(!token){
    return next(new ErrorHandler("Please login to access this resource",401));
   }

   const decodeData=jwt.verify(token,process.env.JWT_SECRET);
   req.user=await User.findById(decodeData.id);//saved the current user in req.user while login
   next();
});


exports.authorizeRoles=(...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
           return next( new ErrorHandler(`Role : ${req.user.role} is not allowed to access this resource`,403));
        };
        next();
  };
};