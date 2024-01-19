const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  goal: String,
  frequency: String,
  progress: Number,
  completions: [{ type: Date }] // Array to store completion dates
});

module.exports = mongoose.model('Habit', habitSchema);
