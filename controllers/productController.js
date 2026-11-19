const { AppError } = require("../utils/errorHandler");

const getProductById = (req, res, next) => {
  const id = req.params.id;

  if (id === "999") {
    return next(new AppError("Product not found", 404));
  }

  res.json({
    success: true,
    message: `Fetching product with ID: ${id}`,
  });
};

module.exports = { getProductById };
