const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  utilisateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Utilisateur',
    required: true
  },
  salle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Salle',
    required: true
  },
  dateHeureDebut: {
    type: Date,
    required: true
  },
  dateHeureFin: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['Confirmée', 'Annulée', 'En attente'],
    default: 'En attente'
  }
});

const Réservation = mongoose.model('Réservation', reservationSchema);

module.exports = Réservation;
