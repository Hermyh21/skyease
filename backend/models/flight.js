const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  notes: { type: String }
});

module.exports = mongoose.model('Flight', flightSchema);
