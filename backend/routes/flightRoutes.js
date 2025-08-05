const express = require('express');
const { getAllFlights, addFlight, updateFlight, deleteFlight } = require('../controllers/flightController');
const router = express.Router();

router.get('/', getAllFlights);
router.post('/', addFlight);
router.put('/:id', updateFlight);
router.delete('/:id', deleteFlight);

module.exports = router;
