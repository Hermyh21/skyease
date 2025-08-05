const User = require('../models/user');
const Meditation = require('../models/meditation');

// Sync user's downloaded meditations (can be anonymous)
exports.syncMeditations = async (req, res) => {
  const { userId, downloadedMeditations } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Add new downloaded meditations to user's record
    downloadedMeditations.forEach(download => {
      const alreadyDownloaded = user.downloadedMeditations.some(dm =>
        dm.meditationId.toString() === download.meditationId
      );

      if (!alreadyDownloaded) {
        user.downloadedMeditations.push({
          meditationId: download.meditationId,
          downloadedAt: new Date(),
        });
      }
    });

    await user.save();
    res.json({ message: 'Meditations synced successfully', user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
