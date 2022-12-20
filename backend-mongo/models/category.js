const { Schema, model } = require('mongoose');

const CategorySchema = new Schema(
  {
    category: String,
    type: String,
  },
  {
    timestamps: true,
  }
);
