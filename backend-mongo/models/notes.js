const { Schema, model } = require('mongoose');
const noteSchema = new Schema(
  {
    note: String,
    price: Number,
    category: String,
    transectionAt: Date,
    type: String,
    paymentMode: String,
  },
  { timestamps: true }
);
const NoteModel = model('note', noteSchema);
module.exports = NoteModel;
