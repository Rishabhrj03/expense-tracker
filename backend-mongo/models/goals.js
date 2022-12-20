const { Schema, model } = required('mongoose');
const goalSchema = new Schema(
  {
    topic: String,
    amount: Number,
    initialAmount: Number,
    currentAmount: Number,
    goalDate: Date,
  },
  {
    timestamps: true,
  }
);
const goalModal = model('goal', goalSchema);
module.exports = goalModal;
