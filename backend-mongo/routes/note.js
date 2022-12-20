const router = require('express').Router();
const Note = require('../models/notes');
router.post('/', async (req, res) => {
  const { note, price, category, transectionAt } = req.body;
  const noteObj = new Note({
    note,
    price,
    category,
    transectionAt,
  });
  const result = await noteObj.save();
  res.status(201).json({
    success: true,
    result,
  });
});
router.get('/', async (req, res) => {
  const result = await Note.find();
  res.status(200).json({
    success: true,
    result,
  });
});

router.get('/montlyGraphbyCategory', async (req, res) => {
  let expensebyCategory = Note.aggregate([
    {
      $group: {
        _id: {
          source: '$category',
          price: { $sum: '$price' },
        },
      },
    },
    { $unwind: '$_id' },
    {
      $group: {
        _id: 1,
        category: {
          $push: {
            category: '$_id.source',
            price: '$_id.price',
          },
        },

        total: { $sum: '$_id.price' },
      },
    },
    // { $addFields: { totally: { $sum: '$_id.price' } } },
    {
      $project: {
        _id: 0,
        category: '$category',
        totalCount: '$total',
        // counted: '$count',
      },
    },
    // { $count: { $sum: '$price' } },
  ]);
  let totalExpense = Note.aggregate([
    { $group: { _id: 0, totalAmount: { $sum: '$price' } } },
    { $project: { _id: 0, totalAmounts: '$totalAmount' } },
  ]);
  [expensebyCategory, totalExpense] = await Promise.allSettled([
    expensebyCategory,
    // totalExpense,
  ]);
  res.status(200).json({
    success: true,
    expensebyCategory: expensebyCategory.value,
    // totalExpense: totalExpense.value,
  });
});

router.get('/yearlyGraphbyMonth', async (req, res) => {
  let montlyExpense = await Note.aggregate([
    {
      $group: {
        _id: { $month: '$transectionAt' },
        price: { $sum: '$price' },
      },
    },
  ]);
  res.status(200).json({
    success: true,
    montlyExpense,
  });
});
module.exports = router;
