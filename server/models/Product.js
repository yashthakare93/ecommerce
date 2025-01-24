const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    description: String,
    category: String,
    brand: String,
    price: Number,
    salePrice: Number,
    totalStock: Number,
    averageReview: Number,
    material: String,
    color: String,
    size: String,
    printType: String,
    sleeveLength: String,
    neckStyle: String,
    gender: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
