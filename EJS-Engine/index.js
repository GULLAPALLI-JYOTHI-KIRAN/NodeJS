/* Embedded Javascript Template EJS */

/*  EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.  */

const express=require("express");
const app=express();
const path=require("path");
const { title } = require("process");

// To use the engine we need to set like this
app.set("view engine","ejs")

// We need to set view folder for express app
app.set("views",path.join(__dirname,"views"));

const products=[
    {
        id:1,
        title:"Product-1"
    },
    {
        id:2,
        title:"Product-2"
    },
    {
        id:3,
        title:"Product-3"
    }
]

// setting routes

app.get("/",(req,res)=>{
    // To render the html content as view we render() method

    res.render("home",{title:"Home Page",products:products})
})

app.get("/about",(req,res)=>{
    //setting about view

    res.render("about",{title:"About Page"})
})

// setting the port

const port=3000

app.listen(port,()=>{
    console.log("Server listening to the port",port);
    
})

