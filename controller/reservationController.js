const Reservation = require('../models/Reservation');

exports.createReservation = async (req, res) => {
    try {
        const { utilisateur,  salle, dateHeureDebut, dateHeureFin, status } = req.body;
        const newReservation = new Reservation({ utilisateur,  salle, dateHeureDebut, dateHeureFin, status  });
        await newReservation.save();
        res.status(201).send('Reservation ajoutée');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.updateReservation = async (req, res) => {
    try {
        const { id } = req.params;
        const { utilisateur,  salle, dateHeureDebut, dateHeureFin, status  } = req.body;
        const updatedReservation = await Reservation.findByIdAndUpdate(id, { utilisateur,  salle, dateHeureDebut, dateHeureFin, status  }, { new: true });
        res.send(updatedReservation);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.deleteReservation = async (req, res) => {
    try {
        const { id } = req.params;
        await Reservation.findByIdAndDelete(id);
        res.send("Reservation supprimée");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        if (!reservation) {
            return res.status(404).send('Reservation not found');
        }
        res.send(reservation);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.getAllReservations = async (req, res) => {
    try {
        const Reservations = await Reservation.find().populate('salle', 'status');
        res.send(Reservations);
    } catch (error) {
        res.status(500).send('Server error');
    }
};
