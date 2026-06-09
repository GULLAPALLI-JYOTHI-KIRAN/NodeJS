const adminMiddleware=(req,res,next)=>{

    const checkAdmin=req.userInfo.userRole;

    try{
        if(checkAdmin=="admin"){
            next()
        }

    }catch(e){
        res.status(500).json({
            success:false,
            message:"Something went Wrong."
        })
    }

}

module.exports=adminMiddleware
