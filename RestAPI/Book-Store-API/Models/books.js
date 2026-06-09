/* Books Model */


const mongoose=require("mongoose");
const BookSchema=new mongoose.Schema({
    title:{
        type:String,
        require:[true,"Book Title is required"],
        trim:true,
        max:[1000,"Book Title can not be more than 1000"]
    },
    author:{
        type:String,
        require:[true,"Author name is required"],
        trim:true,
    },
    year:{
        type:Date,
        require:[true,"Book year is required"],
        min:[1000,"Publication year cann't be less than 1000"],
        max:[new Date().getFullYear(),"Publication year cann't be  future."]
    },
    created_At:{type:Date,default:Date.now}
})

module.exports=mongoose.model("Book",BookSchema);
