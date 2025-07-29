const express= require('express');
const {getAllMeditations, addMeditation, getMeditationById, updateMeditation, deleteMeditation} = require('../controllers/meditationController');
const router = express.Router();
router.get('/', getAllMeditations);
router.post('/', addMeditation);
router.get('/:id', getMeditationById);
router.put('/:id', updateMeditation);
router.delete('/:id', deleteMeditation);
module.exports = router;