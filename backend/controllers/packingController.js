const PackingItem = require('../models/packingItem');

// Get all packing items for a flight
exports.getPackingItems = async (req, res) => {
  try {
    const items = await PackingItem.find({ flightId: req.params.flightId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new packing item
exports.addPackingItem = async (req, res) => {
  const { name, isPacked, flightId } = req.body;
  try {
    const newItem = new PackingItem({ name, isPacked, flightId });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update packing item
exports.updatePackingItem = async (req, res) => {
  try {
    const updatedItem = await PackingItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete packing item
exports.deletePackingItem = async (req, res) => {
  try {
    const deletedItem = await PackingItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
