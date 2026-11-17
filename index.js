const express = require("express");

const app = express();

// Logging Middleware
const loggingMiddleware = (req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
};

// Register middleware
app.use(loggingMiddleware);

// GET /products
app.get("/products", (req, res) => {
  res.send("Here is the list of all products.");
});

// POST /products
app.post("/products", (req, res) => {
  res.send("A new product has been added.");
});

// GET /categories
app.get("/categories", (req, res) => {
  res.send("Here is the list of all categories.");
});

// POST /categories
app.post("/categories", (req, res) => {
  res.send("A new category has been created.");
});

// Start server
app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
