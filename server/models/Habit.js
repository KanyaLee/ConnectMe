const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    goal: String,
    date : {type: Date, default: Date.now},
    duration: Number,
    progress: Number,

})

module.exports = mongoose.model("Habit", habitSchema);

