/* Middleware In Express */

/* Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.




*/

// If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

const express = require("express");

const app = express();

// Middelware

const myFirstMiddleware = (req, res, next) => {
  console.log("This middleware runs on every request.");
  next();
};

app.use(myFirstMiddleware);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

const port = 3000;

app.listen(port, () => {
  console.log("Serevr running on this port", port);
});
