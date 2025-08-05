const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const meditationRoutes = require('./routes/meditation');
const userRoutes = require('./routes/user');
const flightRoutes = require('./routes/flightRoutes');
const packingRoutes = require('./routes/packingRoutes');


// dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {        
    console.error('Error connecting to MongoDB:', err);
});
app.get('/', (req, res) => {
  res.send('SkyEase Backend API is Running!');
});

app.use('/api/auth', authRoutes);
app.use('/api/packing', packingRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/users', userRoutes);
app.use('/api/meditation', meditationRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});