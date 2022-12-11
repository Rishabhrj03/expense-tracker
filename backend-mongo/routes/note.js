const router = require('express').Router();
const Note = require('../models/notes');
console.log('I am here 3');
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
module.exports = router;
