/* Creating custom Middleware */

const express = require("express");

const app = express();

const CustomMiddleware = (req, res, next) => {
  console.log(`This custom middleware ${req.method} and ${req.url}`);
  /* If you not specify next() at end 
this will happen

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.*/
  next();
};

app.use(CustomMiddleware);
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
