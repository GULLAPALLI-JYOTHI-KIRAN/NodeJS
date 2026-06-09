

const User=require("../Model/User")

const bcrypt=require("bcryptjs");

const jwt=require("jsonwebtoken")
const register=async(req,res)=>{
    try{
        const {userName, email,password}=req.body
console.log(req.body);

        const checkUserExist=await User.findOne({
            $or:[{userName},{email}]
        })

        if(checkUserExist){
            res.status(400).json({
                success:false,
                message:"User is already exists either with same username or same email. Please try with a different username or email",

            })

        }else{

            const salt=await bcrypt.genSalt(10);
    
            const hash=await bcrypt.hash(password,salt);

            const NewUser=new User({
                userName,
                email,
                password:hash,
            })

            await NewUser.save();

            res.status(201).json({
                success:true,
                message:"User created successfully",
                RegisteredUser:NewUser,
            })
        }

    }catch(e){
        res.status(500).json({
            success:false,
            message:"Something went Wrong.Please try again !",
            error:e
        })
    }
}

const login=async(req,res)=>{
    try{

        const {userName,password}=req.body

        const checkUserNameExist=await User.findOne({userName})

        if(!checkUserNameExist){
            res.status(400).json({
                success:false,
                message:"User Name  doesn't exist."
            })
        }else{

            const checkPassword=await bcrypt.compare(password,checkUserNameExist.password);


            if(!checkPassword){
                res.status(401).json({
                success:false,
                message:"Invaild Credentails"
            })
        }
            else{
                // JWT npm i jsonwebtoken JSON WEB TOKEN
                //add env variable for secert key for this Jwt

                // createing JWt TOken for user login
                const accessToken=jwt.sign({
                    userId:checkUserNameExist._id,
                    userName:checkUserNameExist.userName,
                    userRole:checkUserNameExist.role
                },process.env.JWT_SCERTE_KEY,{expiresIn:"15m"})


                res.status(200).json({
                    success:true,
                    message:"Login Successfully",
                    accessToken
                })
            }
        }

    }catch(e){
        res.status(500).json({
            success:false,
            message:"Something went Wrong.Please try again !"
        })
    }
}


module.exports={register,login}
