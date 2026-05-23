/* app contains in express */

const express = require("express");

const app = express();

// used for setting application setting

// engine

app.set("view engine", "ejs");

//different routes
app.get("/", (req, res) => {
  res.send("New Content.");
});

app.post("/api/feedback", (req, res) => {
  res.json({
    Message: "Data Submitted successfuly",
    data: req.body,
  });
});

//error checking

app.use((error, req, res, next) => {
  console.log("Error", error.stack);

  res.status(400).send("Something went Wrong.");
});

const port = 3000;

app.listen(port, () => {
  console.log("Express Server listening to the port", port);
});
