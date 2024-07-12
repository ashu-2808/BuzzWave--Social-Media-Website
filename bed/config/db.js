
// config/db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/buzzwave_db')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));