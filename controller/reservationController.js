const Reservation = require('../models/Reservation');
const nodemailer = require('nodemailer');



/*
// Fonction pour vérifier les conflits de réservation
const checkReservationConflict = async (salleId, dateHeureDebut, dateHeureFin) => {
    const existingReservation = await Reservation.findOne({
        salle: salleId,
        $or: [
            { dateHeureDebut: { $gte: dateHeureDebut, $lt: dateHeureFin } },
            { dateHeureFin: { $gt: dateHeureDebut, $lte: dateHeureFin } }
        ]
    });
    return existingReservation;
};

// Fonction pour envoyer des notifications par e-mail
const sendEmailNotification = async (reservation, action) => {
    // Configurer le transporteur de messagerie
    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com', // Remplacez par l'adresse du serveur SMTP
        port: 587, // Port SMTP
        secure: false, // true pour SSL, false pour TLS
        auth: {
            user: 'your_username', // Nom d'utilisateur SMTP
            pass: 'your_password' // Mot de passe SMTP
        }
    });

    // Configuration de l'e-mail
    const mailOptions = {
        from: 'your@example.com',
        to: reservation.utilisateur.email, // Assurez-vous que votre modèle de données Reservation contient l'e-mail de l'utilisateur
        subject: 'Notification de réservation',
        text: `Votre réservation a été ${action}.`
    };

    // Envoi de l'e-mail
    await transporter.sendMail(mailOptions);
};

exports.ReserverReservation = async (req, res) => {
    try {
        const { utilisateur, salle, dateHeureDebut, dateHeureFin, status } = req.body;

        // Vérifier s'il y a un conflit de réservation
        const conflictReservation = await checkReservationConflict(salle, dateHeureDebut, dateHeureFin);
        if (conflictReservation) {
            return res.status(400).send('Conflit de réservation détecté');
        }

        const newReservation = new Reservation({ utilisateur, salle, dateHeureDebut, dateHeureFin, status });
        await newReservation.save();

        // Envoyer une notification par e-mail pour confirmer la réservation
        await sendEmailNotification(newReservation, 'créée');

        res.status(201).send('Reservation ajoutée');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

*/





//2eme solution






/*
// Fonction pour ajouter une réservation
exports.addReservation = async (req, res) => {
    try {
      // Extraction des données de la requête
      const utilisateur = req.user; // Utilisateur extrait de req.user
      const salle = req.body.roomid; // Identifiant de la salle extrait de req.body.roomid
      const req_duration = req.body.duration; // Durée de la réservation extraite de req.body.duration
      const dateHeureDebut = moment(req.body.started); // Date de début de la réservation convertie en objet moment
      const dateHeureFin = startedAt.clone().add(req_duration, "days"); // Date de fin de la réservation calculée
  //, , status
      // Recherche des réservations existantes qui chevauchent la période spécifiée
      const existingReservations = await Reservation.find({
        $or: [
          {
            started: { $lte: startedAt.toDate() },
            ended: { $gte: startedAt.toDate() },
          },
          {
            started: { $lte: endedAt.toDate() },
            ended: { $gte: endedAt.toDate() },
          },
        ],
      });
  
      // Vérification de la disponibilité de la salle
      if (existingReservations.length === 0) {
        // Création d'une nouvelle réservation si la salle est disponible
        const reservation = await new Reservation({
          utilisateur: user._id,
          salle: room_id,
          started: startedAt.toDate(),
          duration: req_duration,
        }).save();
  
        // Génération d'un token JWT pour confirmer la réservation
        const token = jwt.generateToken_comfirm(reservation);
  
        // Préparation de l'e-mail de confirmation
        const mailOptions = mailservice.comfiramtion_mail(user, token);
  
        // Envoi de l'e-mail de confirmation
        await mailservice.sendMail(mailOptions);
  
        // Réponse indiquant que la réservation a été ajoutée avec succès et que l'e-mail de confirmation a été envoyé
        res.status(201).json({
          message: "Réservation ajoutée, email de confirmation envoyé",
          reservation: reservation,
        });
      } else {
        // Réponse indiquant que la période est déjà prise si des réservations existantes sont trouvées
        res.status(400).json({ message: "Période déjà réservée" });
      }
    } catch (error) {
      // Gestion des erreurs
      res.status(400).send(error.message);
    }
  };

*/




/*/3eme methode 
//Create and Save a new reservation
exports.create = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: "Content can not be empty!" });
    }
      
    const transporter = nodemailer.createTransport({ 
        service: 'gmail', 
        auth: { 
            user: "ayari154ibtihel@gmail.com", 
            pass: "lzcn msjy 5iaf fus5 so7k fgdh mbwp mmno" 
        } 
    }); 
  
    transporter.sendMail({
        to: "ayari154ibtihel@gmail.com",
        subject: 'Verify Account',
        html: "Click <a href=''>here</a> to confirm your reservation."
    });

    const reservationCheck = await reservationModel.find({ Date: req.body.date, salle: req.params.salleId });
    if (reservationCheck.length > 0) {
        return res.render('SelectDate', { salleId: req.params.salleId, msg: "There is already a reservation on " + req.body.date });
    } else {
        const reservation = new reservationModel({
            utilisateur: req.params.utilisateur,
            salle: req.params.salle,
            status: req.params.status,
            dateHeureDebut: req.body. dateHeureDebut,
            dateHeureFin: req.params.dateHeureFin
        });
    
        await reservation.save()
            .then(data => {
                console.log(data);
                res.send({
                    message: "Reservation created successfully!!",
                    reservation: data
                });
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating reservation"
                });
            });
    }
};*/





/*

//3eme methode 
// Créer et sauvegarder une nouvelle réservation
exports.create = async (req, res) => {
    // Vérifie si le corps de la requête est vide
    if (!req.body) {
        return res.status(400).send({ message: "Content can not be empty!" });
    }
    
    // Crée un transporteur de courrier pour envoyer un e-mail
    const transporter = nodemailer.createTransport({ 
        service: 'gmail', 
        auth: { 
            user: "ayari154ibtihel@gmail.com", 
            pass: "lzcn msjy 5iaf fus5 so7k fgdh mbwp mmno" 
        } 
    }); 

    // Envoie un e-mail de confirmation de réservation
    transporter.sendMail({
        to: "ayari154ibtihel@gmail.com",
        subject: 'Verify Account',
        html: "Click <a href=''>here</a> to confirm your reservation."
    });

    // Vérifie s'il existe déjà une réservation pour la même date et la même salle
    const reservationCheck = await reservationModel.find({ Date: req.body.date, salle: req.params.salleId });
    if (reservationCheck.length > 0) {
        // Rend la vue SelectDate avec un message d'erreur si une réservation existe déjà
        return res.render('SelectDate', { salleId: req.params.salleId, msg: "There is already a reservation on " + req.body.date });
    } else {
        try {
            // Extraction des données de la requête
            const { utilisateur, salle, dateHeureDebut, dateHeureFin, status } = req.body;
            // Création d'une nouvelle instance de réservation avec les données de la requête
            const newReservation = new Reservation({ utilisateur, salle, dateHeureDebut, dateHeureFin, status });
            // Sauvegarde la nouvelle réservation dans la base de données
            await newReservation.save();
            // Renvoie une réponse de succès avec le statut 201 si la réservation est ajoutée avec succès
            res.status(201).send('Reservation ajoutée');
        } catch (error) {
            // Renvoie une réponse d'erreur avec le message d'erreur s'il y a une exception
            res.status(400).send(error.message);
        }
    }
};
*/








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
