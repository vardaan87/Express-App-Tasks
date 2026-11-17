const express = require("express");
const app = express();
const productRouter = require("./routers/productRoute");
const categoriesRouter = require("./routers/categoriesRoute");

app.use("/products", productRouter);

app.use("/categories", categoriesRouter);

// Start server
app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
