const express = require("express");

const app = express();

// Dynamic GET route
app.get("/welcome/:username", (req, res) => {
  // Extract route parameter
  const username = req.params.username;

  // Extract query parameter
  const role = req.query.role;

  // Send personalized response
  res.send(`Welcome ${username}, your role is ${role}`);
});

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
