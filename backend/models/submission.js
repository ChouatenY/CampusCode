const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  matricule: { type: String, required: true },
  major: { type: String, required: true },
  specialization: { type: String, required: true },
  session: { type: String, required: true },
  courseCode: { type: String, required: true },
  semester: { type: String, required: true },
  consent: { type: Boolean, required: true },
  examCode: { type: String, required: true },
  answers: [{
    questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
    code: { type: String, required: true },
    result: { type: String }
  }]
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
