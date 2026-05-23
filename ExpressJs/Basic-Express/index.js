/* Express Js  

Express Js is Web Framework for Node.js

Express js used to create robust Web API with middleware support*/

/* Installing ExpressJS

initialize project with npm init 

then install

npm install express
*/

const express = require("express");

// create express application

const app = express();

// basic route

app.get("/", (req, res) => {
  res.send("This is express application");
});

const port = 3000;

app.listen(port, () => {
  console.log("Express Server listening to the port", port);
});
