const express = require('express');
const router = express.Router();
const Submission = require('../models/submission');

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

// Save individual answer
router.post('/save-answer', async (req, res) => {
  try {
    // Implement logic to save individual answer if needed
    res.status(201).json({ message: 'Answer saved' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
