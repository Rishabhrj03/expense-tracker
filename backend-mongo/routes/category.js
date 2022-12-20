const router = require('express').Router();
const Category = require('../models/category');

router.post('/', async (req, res) => {
  const { category, type } = req.body;

  const categoryObj = new Category({
    category,
    type,
  });
  const result = await categoryObj.save();
  res.status(201).json({
    success: true,
    result,
  });
});
router.get('/', async (req, res) => {
  const result = await Category.find();
  res.status(200).json({
    success: true,
    result,
  });
});
module.exports = router;
