import Category from "../models/category.mjs";

export const createCategories = async (req, res) => {
  const category = new Category(req.body);
  try {
    const savedCategory = await category.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

export const fetchCategories = async (req, res) => {
  try {
    const category = await Category.find({});
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
};
