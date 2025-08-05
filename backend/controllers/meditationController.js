const Meditation = require('../models/meditation');

// GET all meditations
exports.getAllMeditations = async (req, res) => {
  try {
    const meditations = await Meditation.find();
    res.json(meditations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST a meditation
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

// GET meditation by ID
exports.getMeditationById = async (req, res) => {
  try {
    const meditation = await Meditation.findById(req.params.id);
    if (!meditation) return res.status(404).json({ message: 'Meditation not found' });
    res.json(meditation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT update meditation
exports.updateMeditation = async (req, res) => {
  try {
    const updatedMeditation = await Meditation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMeditation) return res.status(404).json({ message: 'Meditation not found' });
    res.json(updatedMeditation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE meditation
exports.deleteMeditation = async (req, res) => {
  try {
    const deletedMeditation = await Meditation.findByIdAndDelete(req.params.id);
    if (!deletedMeditation) return res.status(404).json({ message: 'Meditation not found' });
    res.json({ message: 'Meditation deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
