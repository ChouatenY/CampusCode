const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const adminRoutes = require('./routes/admin');
const studentRoutes = require('./routes/student');

app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);

// Database connection
mongoose.connect('mongodb://localhost:27017/exam-platform', { useNewUrlParser: true, useUnifiedTopology: true });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
