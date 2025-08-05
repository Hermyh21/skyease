const User = require('../models/user');

// POST /api/auth/anonymous
exports.createAnonymousUser = async (req, res) => {
  try {
    const newUser = new User({ anonymous: true });
    await newUser.save();
    res.status(201).json({ userId: newUser._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
