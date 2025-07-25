const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

const stuffController = require('../controllers/stuffController');

router.post('/', auth, stuffController.createThing);
router.put('/:id', auth, stuffController.updateThing);
router.delete('/:id', auth, stuffController.deleteThing);
router.get('/:id', auth, stuffController.getOneThing);
router.get('/', auth, stuffController.getAllThings);

module.exports = router;