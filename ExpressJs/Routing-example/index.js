/* Basic Routing in Express */

const express = require("express");

const app = express();

/* simple get request */

app.get("/", (req, res) => {
  res.send("This is simple GET Request");
});

app.get("/products", (req, res) => {
  const products = [
    { id: 1, label: "Product-1" },
    { id: 2, label: "Product-2" },
    { id: 3, label: "Product-3" },
  ];
  res.json(products);
});

/* Dynamic routing with products data */

app.get("/products/:id", (req, res) => {
  /* whatever you passed after :id that will be access with req.params.id */
  const productId = req.params.id;
  const products = [
    { id: 1, label: "Product-1" },
    { id: 2, label: "Product-2" },
    { id: 3, label: "Product-3" },
  ];
  const product = products.find((eachProduct) => eachProduct.id == productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Not Content Avaiable.");
  }
});

const port = 3000;

app.listen(port, () => {
  console.log("Server is listening for port", port);
});
