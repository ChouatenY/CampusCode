const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
  title: { type: String, required: true },
  courseTitle: { type: String, required: true },
  duration: { type: Number, required: true },
  examCode: { type: String, required: true, unique: true },
  questions: { type: Array, required: true },
});

module.exports = mongoose.model('Exam', ExamSchema);
