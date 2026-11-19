const express = require("express");
const app = express();
const userRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const { AppError, errorHandler } = require("./utils/errorHandler");

const PORT = 4000;

app.use("/users", userRoutes);
app.use("/products", productsRoutes);
app.use("/cart", cartRoutes);

// Handle undefined routes
app.use((req, res, next) => {
  next(new AppError(`Route ${req.originalUrl} not found`, 404));
});

// Centralized error handler (always last)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
