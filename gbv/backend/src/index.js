const express = require('express');
const cors = require('cors');
require('dotenv').config();  // No need for path since .env is in root of backend
const formRoutes = require('./routes/formRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/forms', formRoutes);

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'GBV Support API is running' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});