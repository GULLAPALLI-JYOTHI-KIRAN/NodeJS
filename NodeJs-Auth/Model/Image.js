const mongoose=require("mongoose")


const ImageSchema=new mongoose.Schema({
    url:{
        type:String,
        require:true
    },
    publicId:{
        type:String,
        require:true
    },
    updatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true,
    }
},{timestamps:true})


module.export=mongoose.model("Image",ImageSchema);
