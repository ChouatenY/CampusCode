const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const adminRoutes = require('./routes/admin');
const studentRoutes = require('./routes/student'); // Import student routes

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
}));

// Routes
app.use('/admin', adminRoutes);
app.use('/student', studentRoutes); // Mount student routes

mongoose.connect('mongodb://localhost:27017/CampusCodeDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
