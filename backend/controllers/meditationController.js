const Meditation = require('../models/meditation');

// GET /api/meditations
exports.getAllMeditations = async (req, res) => {
  try {
    const meditations = await Meditation.find();
    res.json(meditations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/meditations
exports.addMeditation = async (req, res) => {
  const { title, description, audioUrl, duration, tags } = req.body;

  try {
    const newMeditation = new Meditation({ title, description, audioUrl, duration, tags });
    await newMeditation.save();
    res.status(201).json(newMeditation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
