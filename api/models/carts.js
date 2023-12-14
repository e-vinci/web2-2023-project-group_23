const path = require('node:path');
const { parse, serialize } = require('../utils/json');
const jsonDbPath = path.join(__dirname, '/../data/carts.json');

let paniers = {};



function initialiserPanierUtilisateur(userId) {
    // Initialise le panier pour un nouvel utilisateur
    paniers[userId] = {};
}

function ajouterAuPanierParId(userId, articleId, quantite) {
    // Assurez-vous que l'utilisateur a un panier initialisé
    if (!paniers[userId]) {
        initialiserPanierUtilisateur(userId);
    }

    // Ajoute l'ID au panier de l'utilisateur avec la quantité correspondante
    paniers[userId][articleId] = quantite;

    console.log("ID ajouté au panier avec la quantité :", articleId, quantite);
    console.log("Contenu du panier de l'utilisateur :", getContenuDuPanier(userId));
}

function getContenuDuPanier(userId) {
    // Retourne le panier de l'utilisateur
    return paniers[userId] || {};
}

function viderPanierUtilisateur(userId) {
    // Réinitialise le panier de l'utilisateur
    paniers[userId] = {};
}


module.exports = { ajouterAuPanierParId, getContenuDuPanier , viderPanierUtilisateur };

