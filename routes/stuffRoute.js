const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const stuffController = require('../controllers/stuffController');

router.post('/', auth, multer, stuffController.createThing);
router.put('/:id', auth, stuffController.updateThing);
router.delete('/:id', auth, stuffController.deleteThing);
router.get('/:id', auth, stuffController.getOneThing);
router.get('/', auth, stuffController.getAllThings);

module.exports = router;