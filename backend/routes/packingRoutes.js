const express = require('express');
const { getPackingItems, addPackingItem, updatePackingItem, deletePackingItem } = require('../controllers/packingController');
const router = express.Router();

router.get('/:flightId', getPackingItems);
router.post('/', addPackingItem);
router.put('/:id', updatePackingItem);
router.delete('/:id', deletePackingItem);

module.exports = router;
