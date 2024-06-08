const express = require('express');
const router = express.Router();
const Exam = require('../models/exam');
const Submission = require('../models/submission');

// Create an exam
router.post('/create-exam', async (req, res) => {
  const newExam = new Exam(req.body);
  try {
    const savedExam = await newExam.save();
    res.status(201).json(savedExam);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all submissions
router.get('/submissions', async (req, res) => {
  try {
    const submissions = await Submission.find();
    res.status(200).json(submissions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
