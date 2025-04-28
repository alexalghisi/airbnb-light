const express = require('express');
const mongoose = require('mongoose');
const roomsRoute = require('./routes/rooms');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB (replace URI with your own if needed)
mongoose.connect('mongodb://localhost:27017/airbnb-light', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Use rooms route
app.use('/api/rooms', roomsRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
