import { Category } from '../models/index.js';

export const getCategories = async (req, res, next) => {
  try {
    const userId = 1; // TO DO: change with the current logged userId
    const categories = await Category.findAll({ where: { userId: +userId } });
    res.status(200).json(categories);
  } catch (err) {
    res.status(404).json({ message: `Error. Categories not found.` });
    console.log(err);
  }
};

export const postAddCategory = async (req, res, next) => {
  try {
    const categoryData = req.body;
    categoryData.userId = 1; // TO DO: change userId with the current logged userId
    const newCategory = await Category.create(categoryData);
    res.status(200).json(newCategory);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: `Error. Category couldn't be created.` });
  }
};
