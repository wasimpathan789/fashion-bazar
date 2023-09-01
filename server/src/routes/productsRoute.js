const express = require("express");
const Product = require("../models/productSchema");
const router = express.Router();

router.get("/products", async (req, res) => {
  const productList = await Product.find();
  if (!productList) {
    res.send(500);
  }
  res.send(productList);
});

router.post("/products", async (req, res) => {
  const {
    name,
    image,
    countInStock,
    description,
    images,
    category,
    price,
    rating,
    numReviews,
    isFeatures,
  } = req.body;
  try {
    const product = await Product.create({
      name: name,
      description: description,
      image: image,
      countInStock: countInStock,
      images: images,
      category: category,
      price: price,
      rating: rating,
      numReviews: numReviews,
      isFeatures: isFeatures,
    });
    res.status(400).json(product);
  } catch (error) {
    console.log(error);
    res.status(201).json({ error: error.message });
  }
});

module.exports = router;
