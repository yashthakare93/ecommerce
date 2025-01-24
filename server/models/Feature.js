const mongoose = require("mongoose");

const FeatureSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true, // Ensure every feature has an image
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feature", FeatureSchema);

