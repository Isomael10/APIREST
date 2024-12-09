const mongoose = require('mongoose'); // Correction ici

// Schéma utilisateur
let userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

// Modèle utilisateur
const User = mongoose.model('User', userSchema); // Correction ici
module.exports = User; // Correction ici
