const UserModel = require("../models/businessAcc")
const bcrypt = require('bcryptjs/dist/bcrypt');
exports.getUser=async(req,res)=>{
    const user =await UserModel.find();
    res.status(200).json({
        message:"get user data successfully",
        user
    })
}
exports.addUser=async(req,res)=>{
    const user =await UserModel.create(req.body);
    res.status(201).json({
        message:"get user data successfully",
        user
    })
}
exports.updateUser =async(req,res)=>{
    let user = await UserModel.findById(req.params.id);
    if(!user){
        res.status(404).json({
            message:"user not found"
        })
    }
    user = await UserModel.findByIdAndUpdate(req.params.id,req.body,
        {
            new:true,
            runValidators:true,
            useFindAndModify:false
        })
        res.status(200).json({
            message:"user Update successfully",
            user
        })
};

exports.deleteUser =async (req,res,next)=>{
        const user = await UserModel.findById(req.params.id);
        if(!user){
            res.status(404).json({
                message:"user not found"
            })
     
     };
     await user.remove();
     res.status(200).json({
         message:"Delete successfully",
         user
     })
}

exports. userLogin = async(req,res)=>{
    if(!req.body.email || !req.body.password){
        res.status(400).json({
            message:"Please select  Email Or Password "
        })
    }
    const user = await UserModel.findOne({email:req.body.email}).select("+password");
    if(!user){
        responseType.message="Invalid user Email  "    
    }
    const isPassowrdMatched = user.camparePassword(req.body.password);
    if(!isPassowrdMatched){
     return res.status(401).json({
         message:"iNVALID USER EMAIL OR PASSWORD"
     })
    }
    const token =await user.getAuthToken()
    res.status(200).json({
        message:"User Login successfully  ",
        token
    })
}

