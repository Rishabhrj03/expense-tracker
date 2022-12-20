const { Schema, model } = require('mongoose');

const categoryLimitSchema = new Schema(
  {
    category: String,
    limit: Number,
  },
  {
    timestamps: true,
  }
);
const categoryLimitModal = model('categoryLimit', categoryLimitSchema);
module.exports = categoryLimitModal;
