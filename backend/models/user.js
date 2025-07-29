const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, sparse: true },
  password: String, // hashed
  anonymous: { type: Boolean, default: false },
  downloadedMeditations: [String], // array of meditation _id
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
