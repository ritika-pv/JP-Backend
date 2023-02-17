const ErrorHandler=require("../utils/errorHandler");
const catchAsyncErrors=require("../middleware/catchAsyncError");
const User=require("../models/userModel");
const sendToken = require("../utils/jwtToken");

//Register a user

exports.registerUser=catchAsyncErrors(async(req,res,next)=>{
    const{fname,lname,email,password,phone,address,city,state,zip}=req.body;
    const user=await User.create({
        fname,lname,email,password,phone,address,city,state,zip,
        avatar:{
            public_id:"this is sample id",
            url:"profilePicUrl",
        },
    });
   

   sendToken(user,201,res);//201 = created
});


//Login User
exports.loginUser=catchAsyncErrors(async(req,res,next)=>{
    const{email,password}=req.body;

    if(!email || !password){
        return next(new ErrorHandler("Please Enter Email & Password",400));
    }
    const user=await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid email or password",401))
    }
    const isPasswordMatched=user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",401));
    }
    

    sendToken(user,200,res); //200 = everything is ok
})

//Logout User
exports.logout=catchAsyncErrors(async(req,res,next)=>{
    res .cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    });
    res.status(200).json({
        success:true,
        message:"logged Out",
    });
});