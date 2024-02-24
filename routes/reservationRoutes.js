const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

router.post('/reservations', reservationController.book);
router.get('/reservations', reservationController.listByUser);
router.get('/reservations/:id', reservationController.getDetails);
router.put('/reservations/:id', reservationController.modify);
router.delete('/reservations/:id', reservationController.cancel);

module.exports = router;
