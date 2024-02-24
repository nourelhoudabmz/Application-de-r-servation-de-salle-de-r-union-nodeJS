const mongoose = require('mongoose');

const salleSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  capacite: {
    type: Number,
    required: true
  },
  equipements: [{
    type: String
  }],
  disponibilites: [{
    jour: {
      type: Date,
      required: true
    },
    plagesHoraires: [{
      debut: Date,
      fin: Date
    }]
  }]
});

const Salle = mongoose.model('Salle', salleSchema);

module.exports = Salle;
