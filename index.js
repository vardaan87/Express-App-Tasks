const express = require("express");
const app = express();
const booksRouter = require("./routers/booksRoute");

app.use("/books", booksRouter);

// Start server
app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
