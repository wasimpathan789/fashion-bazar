const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icons: {
    type: String,
  },
  color: {
    type: String,
  },
  countInStock: {
    type: Number,
  },
});

const Category = new mongoose.model("Category", categorySchema);

module.exports = Category;
