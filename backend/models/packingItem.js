const mongoose = require('mongoose');

const packingItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  isPacked: { type: Boolean, default: false },
  flightId: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight' }
});

module.exports = mongoose.model('PackingItem', packingItemSchema);
