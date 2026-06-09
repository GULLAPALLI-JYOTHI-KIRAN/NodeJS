const express=require("express");

const router=express.Router();
const authMiddleware=require("../middleware/authMiddleware")

const adminMiddleware=require("../middleware/adminMiddleware")
router.get("/welcome",authMiddleware,adminMiddleware,(req,res)=>{
    
    res.status(200).json({
        success:true,
        message:"Welcome to Admin Page",
        userInfo:{...req.userInfo}
    })
})
module.exports=router
