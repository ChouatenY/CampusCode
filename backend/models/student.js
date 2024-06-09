const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    matricule: String,
    major: String,
    specialization: String,
    session: String,
    courseCode: String,
    semester: String,
    examCode: String,
    consent: Boolean
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
