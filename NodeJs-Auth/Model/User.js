const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        require:[true, "UserName is required."],
        unique:[true,"UserName must be Unique."],
        trim:true,
    },
    email:{
        type:String,
        require:[true,"Email is required."],
        unique:[true,"UserName must be Unique."],
        trim:true,
        lowercase:true,
    },
    password:{
        type:String,
        require:[true,"Password is required."],
        trim:true,
        min:[8,"Minimum 8 character required."],
        max:[20,"Maximum 20 character  allowed."]
    },
    role:{
        type:String,
        enum:["user","admin"], // only allow 'user' or 'admin' roles
        default:"user",
    }
},{timestamps:true})


module.exports=mongoose.model("User",userSchema)
