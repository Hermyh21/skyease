const express = require('express');
const { syncMeditations } = require('../controllers/userController');

const router = express.Router();

// Sync downloaded meditations
router.post('/sync-meditations', syncMeditations);

module.exports = router;
