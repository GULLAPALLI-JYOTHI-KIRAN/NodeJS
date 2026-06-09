require("dotenv").config();

const express=require("express");
const connectToDB=require("./database/db")
const authRouter=require("./router/auth-router")

const homeRouter=require("./router/home-route");


const adminRouter=require("./router/admin-route")

const uploadRouter=require("./router/image-route")
const app=express();
connectToDB()


const port=process.env.PORT || 3000

app.use(express.json())


app.use("/api/auth/",authRouter);

app.use("/api/home/",homeRouter)

app.use("/api/admin/",adminRouter);

app.use('/api/image/',uploadRouter)

app.listen(port,()=>{
    console.log("Server is now listening to the port",port);
})
