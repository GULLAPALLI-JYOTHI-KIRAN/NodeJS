/* Creating Routes in Express */

const express=require("express");


const {getAllBooks,getSingleBooksByID,AddNewBook,UpdateBook,DeleteBook}=require("../controllers/book-controller")

const Router=express.Router();

//all Books
Router.get("/get",getAllBooks)

//get single book by Id

Router.get("/get/:id",getSingleBooksByID)

//add new book

Router.post("/add",AddNewBook)

//updated single book by Id

Router.put("/update/:id",UpdateBook)


//delete single book by Id

Router.delete("/delete/:id",DeleteBook)


module.exports=Router
