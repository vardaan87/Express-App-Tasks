const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  addProduct,
} = require("../controllers/productController");

// GET all products
router.get("/", getAllProducts);

// GET product by ID
router.get("/:id", getProductById);

// POST a new product
router.post("/", addProduct);

module.exports = router;
