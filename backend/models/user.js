const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, sparse: true },
  password: String, // Hashed password (optional)
  anonymous: { type: Boolean, default: true },
  downloadedMeditations: [{
    meditationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Meditation' },
    downloadedAt: Date,
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
