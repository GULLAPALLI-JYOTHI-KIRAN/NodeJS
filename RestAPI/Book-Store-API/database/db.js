/* Mongdb Database setup */

const mongoose=require("mongoose")


const DBURL=process.env.DBURL
const connectDB=async()=>{
    try{
        if(!DBURL){
            throw new Error("DB URL is missing. please check in .env file")
        }

        await mongoose.connect(DBURL)
        console.log("MongoDB connected successfully.");
        
    }
    catch(error){
        console.log("DB Connection Failed",error);
        process.exit(1);
        
    }
}

module.exports=connectDB
