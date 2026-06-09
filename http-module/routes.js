/* Creating simple Route .Return Data based on route */


const http=require("http");

const server=http.createServer((req,res)=>{

    const url=req.url;

    if(url==="/"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("This is  Home Page")
    }
    else if(url==="/projects"){
    res.writeHead(200,{"content-type":"text/plain"})
    res.end("This is project Page")

    }
    else if(url==="/other"){
    res.writeHead(404,{"content-type":"text/plain"})
    res.end("No Content Found.")
    }
})

const port=3000

server.listen(port,()=>{
    console.log("Server is started...");
    
})
