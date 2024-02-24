const express = require('express');
const authRoutes = require('./routes/authRoutes');
const salleRoutes = require('./routes/salleRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

const app = express();

app.use(express.json()); // Pour le parsing des requêtes de type application/json

app.use('/api/auth', authRoutes);
app.use('/api/salles', salleRoutes);
app.use('/api/reservations', reservationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
