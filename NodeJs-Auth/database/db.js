const mongoose=require("mongoose");

const connectToDB=async ()=>{
    try{

        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected successfully.")

    }catch(e){
        console.log("Failed to connect to DB",e);
        process.exit(1);

        
    }
}

module.exports=connectToDB
