const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  studentName: String,
  studentID: String,
  answers: [{
    questionId: mongoose.Schema.Types.ObjectId,
    code: String,
    result: String
  }],
  // add other necessary fields
});

module.exports = mongoose.model('Submission', submissionSchema);
