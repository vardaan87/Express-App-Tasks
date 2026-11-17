const express = require("express");
const router = express.Router();

// GET /courses
router.get("/", (req, res) => {
  res.send("Here is the list of all courses.");
});

// GET /courses/:id
router.get("/:id", (req, res) => {
  const courseId = req.params.id;

  res.send(`Course details for ID: ${courseId}`);
});

module.exports = router;
