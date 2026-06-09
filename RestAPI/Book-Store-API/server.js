/*Package required 
dependence npm install
express 
mongoose
dotenv


dev dependence npm install --save-dev nodemon

add this is package.json "dev": "nodemon app.js"

nodemon ==>  is a popular development utility that monitors your Node.js project directory for file changes and automatically restarts your application server. It replaces the traditional node command line, eliminating the need to manually stop and restart your server every time you modify code*/


/* ENV  should be import at top level this server.js is root file for our project*/


require("dotenv").config();

const express=require("express");
const connectDB = require("./database/db");
const Router=require("./routes/book-routes")

const app=express();


const Port=process.env.PORT || 3000;


// connect to Mongodb Database
connectDB()


// middleware parse into JSON by default

app.use(express.json())


//add router to our express app

app.use("/api/books",Router)


app.listen(Port,()=>{

    console.log("Express server is now connected to this port",Port);
    
})
