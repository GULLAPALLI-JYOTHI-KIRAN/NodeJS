/* HTTP Module */

/* Node.js includes a powerful built-in HTTP module that enables you to create HTTP servers and make HTTP requests.

This module is essential for building web applications and APIs in Node.js.

Key Features
Create HTTP servers to handle requests and send responses
Make HTTP requests to other servers
Handle different HTTP methods (GET, POST, PUT, DELETE, etc.)
Work with request and response headers
Handle streaming data for large payloads
 */



/* Understanding the Code
http.createServer() - Creates a new HTTP server instance
The callback function is executed for each request with two parameters:
req - The request object (http.IncomingMessage)
res - The response object (http.ServerResponse)
res.writeHead() - Sets the response status code and headers
res.end() - Sends the response and ends the connection
server.listen() - Starts the server on the specified port */
const http=require("http");


const server=http.createServer((req,res)=>{

    console.log("req",req);

res.writeHead(200,{"content-type":"text/plain"})
res.end("This is Http module data.")

    
})

const port=3000
server.listen(port,"localHost",()=>{

    console.log("Server is now listening to the port ",port);
    
})
