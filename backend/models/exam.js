const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: String,
  // add other necessary fields
});

const examSchema = new mongoose.Schema({
  title: String,
  questions: [questionSchema],
  duration: Number,
  // add other necessary fields
});

module.exports = mongoose.model('Exam', examSchema);
