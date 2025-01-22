const cloudinary = require("cloudinary").v2;
const multer = require("multer");
require("dotenv").config(); // Load environment variables

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer storage (memory storage for buffers)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Utility function for uploading image to Cloudinary
async function imageUploadUtil(file) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => {
        if (error) {
          console.error("Cloudinary upload error:", error);
          reject(new Error("Image upload failed"));
        } else {
          resolve(result);
        }
      }
    );
    uploadStream.end(file.buffer); // Write the buffer to the stream
  });
}

module.exports = { upload, imageUploadUtil };
