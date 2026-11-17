const express = require("express");
const app = express();

const studentRoutes = require("./routes/students");
const courseRoutes = require("./routes/courses");

const PORT = 4000;

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Student and Course Management API");
});

// Register routers
app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

// Custom 404 handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
