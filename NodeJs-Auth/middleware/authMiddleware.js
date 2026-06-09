const jwt=require("jsonwebtoken")

const authMiddlewear=(req,res,next)=>{
    console.log("Auth middleware is running.");

    const authHeaderToken=req.headers["authorization"]

    const accesstoken=authHeaderToken && authHeaderToken.split(" ")[1]
    try{
        const tokenVerified=jwt.verify(accesstoken,process.env.JWT_SCERTE_KEY);
        if(!tokenVerified){
            res.status(401).json({
                success:false,
                message:"Invaild Token or session expired."
            })

        }
        console.log(tokenVerified);
        
        req.userInfo=tokenVerified
        next()
    }
    catch(e){
        res.status(500).json({
            success:false,
            message:"Something Went Wrong."
        })
    }

    

    console.log(authHeaderToken);
}


module.exports=authMiddlewear
