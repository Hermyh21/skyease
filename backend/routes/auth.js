const express = require('express');
const { createAnonymousUser } = require('../controllers/authController');

const router = express.Router();

// Create Anonymous User
router.post('/anonymous', createAnonymousUser);

module.exports = router;
