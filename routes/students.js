const express = require("express");
const router = express.Router();

// GET /students
router.get("/", (req, res) => {
  res.send("Here is the list of all students.");
});

// GET /students/:id
router.get("/:id", (req, res) => {
  const studentId = req.params.id;

  res.send(`Student details for ID: ${studentId}`);
});

module.exports = router;
