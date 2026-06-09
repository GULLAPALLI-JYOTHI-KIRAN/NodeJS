/* Simple Basic Book Store API With ExpressJS */

const express=require("express");

const app=express();

// Express have built in Middleware like below

app.use(express.json()) //Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.


// basic book data

const BookStore=[
    {
        id:1,title:"Book 1"
    },
    {
        id:2,title:"Book 2"
    }
]

// Basic Routes 
app.get("/",(req,res)=>{
    res.status(200).json({
        "message":"This Is Book Store Api using basic setup of ExpressJs and NodeJS"
    })
})


//get All Books
app.get("/getBooks",(req,res)=>{
    if(BookStore){
        res.status(200).json(BookStore)
    }
    else{
        res.status(404).json({
            "message":"No Content Found."
        })
    }
})

app.get("/getBooks/:id",(req,res)=>{
    const getSpecificBook=BookStore.find(book=>book.id==req.params.id)
    if(getSpecificBook){
        res.status(200).json(getSpecificBook)
    }
    else{
         res.status(404).json({
            "message":"No Content Found."
        })
    }
})

app.post("/addBooks",(req,res)=>{
    const addedBook={
        id:BookStore.length+1,
        title:`Book ${BookStore.length+1}`
    }
    BookStore.push(addedBook)
    res.status(200).json({
        "message":"New Book Added to Book Store.",
        data:addedBook
        
    })
})

app.put("/updateBook/:id",(req,res)=>{
console.log(req.body.title);

    const updatedBookIDIndex=BookStore.findIndex(book=>book.id==req.params.id);
    BookStore[updatedBookIDIndex].title= req.body.title || "New Updated Book.";

    res.status(200).json({
        message:`Updated Book is ${req.params.id}`,
        data:BookStore[updatedBookIDIndex]
    })
})

app.delete("/deleteBook/:id",(req,res)=>{
        const findBookIDIndex=BookStore.findIndex(book=>book.id==req.params.id);
       const deletedBook= BookStore.splice(findBookIDIndex,1);
       console.log(deletedBook);
       
        res.status(200).json({
            message:   `Deleted Book from Store.`,
            data:deletedBook
        })
})
const port=3000
app.listen(port,()=>{
    console.log("Server is listening to the port",port);
    
})
