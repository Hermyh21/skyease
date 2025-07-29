const mongoose = require('mongoose');
const meditationSchema = new mongoose.Schema({
    title: String,
    description: String,
    duration: Number, 
    audioUrl: String, 
    tags: [String],
    createdAt: {
        type: Date, default: Date.now}
});
module.exports = mongoose.model('Meditation', meditationSchema);