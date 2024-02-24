const express = require('express');
const router = express.Router();
const salleController = require('../controllers/salleController');

router.get('/salles', salleController.listAll);
router.post('/salles', salleController.create);
router.get('/salles/:id', salleController.getById);
router.put('/salles/:id', salleController.update);
router.delete('/salles/:id', salleController.delete);

module.exports = router;
