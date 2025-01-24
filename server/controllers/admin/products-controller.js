const { imageUploadUtil } = require("../../helpers/cloudinary");
const Product = require("../../models/Product");

const handleImageUpload = async (req, res) => {
  try {
    // Check if the file is provided
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    // Upload the image directly using the buffer
    const result = await imageUploadUtil(req.file); // Pass the file buffer directly

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log("Error uploading image:", error);
    res.status(500).json({
      success: false,
      message: "Image upload failed",
    });
  }
};

// Add a new product
const addProduct = async (req, res) => {
  try {
    const {
      image,
      title,
      description,
      category,
      collection,
      price,
      salePrice,
      totalStock,
      averageReview,
      material,
      color,
      size,
      printType,
      sleeveLength,
      neckStyle,
      gender,
    } = req.body;

    // Check if the required fields are provided
    if (!title || !description || !category || !collection || !price) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const newlyCreatedProduct = new Product({
      image,
      title,
      description,
      category,
      collection,
      price,
      salePrice,
      totalStock,
      averageReview,
      material,
      color,
      size,
      printType,
      sleeveLength,
      neckStyle,
      gender,
    });

    await newlyCreatedProduct.save();
    res.status(201).json({
      success: true,
      data: newlyCreatedProduct,
    });
  } catch (error) {
    console.log("Error adding product:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while adding product",
    });
  }
};

// Fetch all products
const fetchAllProducts = async (req, res) => {
  try {
    const listOfProducts = await Product.find({});
    res.status(200).json({
      success: true,
      data: listOfProducts,
    });
  } catch (error) {
    console.log("Error fetching products:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching products",
    });
  }
};

// Edit a product
const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      image,
      title,
      description,
      category,
      collection,
      price,
      salePrice,
      totalStock,
      averageReview,
      material,
      color,
      size,
      printType,
      sleeveLength,
      neckStyle,
      gender,
    } = req.body;

    let findProduct = await Product.findById(id);
    if (!findProduct)
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });

    // Update the product fields
    findProduct.title = title || findProduct.title;
    findProduct.description = description || findProduct.description;
    findProduct.category = category || findProduct.category;
    findProduct.collection = collection || findProduct.collection;
    findProduct.price = price === "" ? 0 : price || findProduct.price;
    findProduct.salePrice =
      salePrice === "" ? 0 : salePrice || findProduct.salePrice;
    findProduct.totalStock = totalStock || findProduct.totalStock;
    findProduct.image = image || findProduct.image;
    findProduct.averageReview = averageReview || findProduct.averageReview;
    findProduct.material = material || findProduct.material;
    findProduct.color = color || findProduct.color;
    findProduct.size = size || findProduct.size;
    findProduct.printType = printType || findProduct.printType;
    findProduct.sleeveLength = sleeveLength || findProduct.sleeveLength;
    findProduct.neckStyle = neckStyle || findProduct.neckStyle;
    findProduct.gender = gender || findProduct.gender;

    await findProduct.save();
    res.status(200).json({
      success: true,
      data: findProduct,
    });
  } catch (error) {
    console.log("Error editing product:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while editing product",
    });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product)
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log("Error deleting product:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while deleting product",
    });
  }
};

module.exports = {
  handleImageUpload,
  addProduct,
  fetchAllProducts,
  editProduct,
  deleteProduct,
};
