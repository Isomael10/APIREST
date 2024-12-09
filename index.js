require('dotenv').config(); // Charger les variables d'environnement
const express = require('express'); // Correctement importer express
const mongoose = require('mongoose'); // Importer mongoose
const app = express(); // Initialiser l'application Express
const PORT = 5000; // Définir le port

mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log('Succes'))
    .catch((error) => console.error('erreur de connection', error)); // Ajout de la parenthèse fermante



    

// Exemple de réponse pour la route par défaut
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
