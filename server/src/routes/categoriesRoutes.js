const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Category = require("../models/categorySchema");

router.get("/categories", async (req, res) => {
  const categoryList = await Category.find();
  if (!categoryList) {
    res.send(categoryList);
  }
});

router.post("/categories", async (req, res) => {
  const { name, color, icons } = req.body;
  try {
    const category = await Category.create({
      name: name,
      color: color,
      icons: icons,
    });
    res.status(400).json(category);
  } catch (error) {
    console.log(error);
    res.status(201).json({ error: error.message });
  }
});
// in a new way

router.delete("/categories:id", (req, res) => {
  Category.findByIdAndRemove(req.params.id)
    .then((category) => {
      if (category) {
        return res
          .status(200)
          .json({ success: true, message: "category has been deleted" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "category is not found" });
      }
    })
    .catch((error) => {
      return res.status(400).json({ success: false, error: error });
    });
});

// this is other way
// router.delete("/categories:id", (req, res) => {
//   const { id } = req.params;

//   try {
//     const deleteCategory = Category.findByIdAndDelete({ _id: id });
//     res.status(200).json(deleteCategory);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// });

module.exports = router;
