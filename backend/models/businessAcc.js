const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const JWT = require("jsonwebtoken")
const accountSchema =new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
       type:String
    },
    accountType:{
        type:String,
        enum:["Personal","Business"],
        default:"Personal"
    }
    
    
});
accountSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
});

// ========= campare password ===============
accountSchema.methods.camparePassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password)

}
accountSchema.methods.getAuthToken =async function (){
    return JWT.sign({id:this._id},process.env.SECRETKEY,{
        expiresIn:process.env.EXPIRE_TIME
    });
     
};
module.exports=mongoose.model("user",accountSchema)