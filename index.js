const express = require("express");
const app = express();
const userRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");

const PORT = 4000;

app.use("/users", userRoutes);
app.use("/products", productsRoutes);
app.use("/cart", cartRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
