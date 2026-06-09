const mongoose=require("mongoose");
// This MongoDB Connection setup with Mongoose in NodeJS
mongoose.connect("mongodb+srv://gullapallijyothikiran_db_user:E9Zz1SU9hyKJZKKp@learningnodejs.9wwgtlz.mongodb.net/").then(()=>{
    console.log("Connection Successfully Executed");
}).catch((e)=>{
    console.log("Error At DB",e);
    
})

//Creating Schema
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    isActive:Boolean,
    tags:[String],

},{timestamps:true});

//Model for UserSchema
const User=mongoose.model("user",userSchema);

async function RunningDB() {

    try{

        /* One Way of inserting data */

        // If we use this type data will automatically saved into the database collection.
        // const userData=await User.create({
        //     name:"RamKiran",
        //     email:"ramkiran@gmail.com",
        //     age:24,
        //     isActive:true,
        //     tags:["Developer","Designer","Coder","Programer"],
        // })
        // console.log("Created User ",userData);

        // 2nd Way of saving 
// const UserData2=new User({
//             name:"Kiran",
//             email:"kiran@gmail.com",
//             age:40,
//             isActive:true,
//             tags:["Developer","Designer"],
//         })
// // we need to manually save the data to database
// await UserData2.save();
// console.log(UserData2);

// Get all data
// const AllUser=await User.find();

// console.log("All User Data",AllUser)

// specific user Data

const specificUser=await User.find({name:'Kiran'});

// const userData=await User.create({
//             name:"Rahul",
//             email:"rahul@gmail.com",
//             age:34,
//             isActive:false,
//             tags:["Developer"],
//         })
//         console.log("Created User ",userData);
const moreSpecificUser=await User.find({name:"Ram",age:14})

console.log("Specific User",specificUser);

// const basedOnID=await User.findById(userData._id)

// console.log("Based on ID",basedOnID)

const TotalRecords=await User.countDocuments();

// limit and skip

const TwoRecordOnly=await User.find().limit(2).skip(1);

console.log("Limiting to 2 records and skip 1 from 2 records",TwoRecordOnly)

console.log("Total Records",TotalRecords)

//sorting

const Asc=await User.find().sort({age:-1});

console.log("Ascending Order",Asc);

// const userData=await User.create({
//             name:"Rahul",
//             email:"rahul@gmail.com",
//             age:54,
//             isActive:true,
//             tags:["Developer"],
//         })
//         console.log("Created User ",userData);


        // getone even matching is more

    const getOneEvenMatchingMore=await User.findOne({name:"Rahul"});

    console.log("Matching is More than one still return first match",getOneEvenMatchingMore)
    //required specific feild to return

    const specificFiledsToReturn=await User.find({name:"Rahul"}).select("name email -_id")

    console.log("Specific Fileds to return ",specificFiledsToReturn);


    // find By Id and Update it

    // const NewUpdated =await User.findByIdAndUpdate({_id:"6a1576a4d60a084b0de69c3e"},{
    //     $set:{age:100},
    //     $push:{tags:"Updated"}
    // },{new:true})

    // console.log("Updating specific user details by finding by ID",NewUpdated);
    
    // Delete Particular User by ID

    const Deleteduser=await User.findByIdAndDelete({_id:"6a15768d4ad51ed1ffb2f18d"},{new:true})
console.log("Delete Particular User by ID",Deleteduser);

    }catch(e){
        console.log("Error in Running Function",e);
        
    }
    finally{
        await mongoose.connection.close();
    }
}
RunningDB()

