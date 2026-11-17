const express = require("express");

const router = express.Router();

// GET /categories
router.get("/", (req, res) => {
  res.send("Here is the list of books!");
});

// POST /categories
router.post("/", (req, res) => {
  res.send("Book has been added!");
});

module.exports = router;
