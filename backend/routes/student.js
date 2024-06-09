const express = require('express');
const router = express.Router();
const Submission = require('../models/submission');
const Exam = require('../models/exam');

// Get exam by code
router.get('/exam/:examCode', async (req, res) => {
  try {
    const exam = await Exam.findOne({ examCode: req.params.examCode });
    if (!exam) {
      return res.status(404).json({ error: 'Exam not found' });
    }
    res.json(exam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Submit exam answers
router.post('/submit', async (req, res) => {
  const newSubmission = new Submission(req.body);
  try {
    const savedSubmission = await newSubmission.save();
    res.status(201).json(savedSubmission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
