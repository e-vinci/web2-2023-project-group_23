const express = require('express');
const {
  ajouterAuPanierParId,
  getContenuDuPanier,
  viderPanierUtilisateur,
} = require('../models/carts');

const router = express.Router();

// Route pour obtenir le contenu du panier d'un utilisateur
router.get('/contenu-du-panier/:userId', (req, res) => {
  const { userId } = req.params;
  const contenuDuPanier = getContenuDuPanier(userId);
  res.json(contenuDuPanier);
});

// Route pour ajouter un article au panier par ID
router.post('/addCart', async (req, res) => {
  console.log('salut');
  const { userId, articleId, quantite } = req.params;
  console.log(userId, articleId, quantite);
  const cart = await ajouterAuPanierParId(userId, articleId, quantite);
  return res.json(cart);
});

// Route pour vider le panier d'un utilisateur
router.delete('/vider-panier/:userId', (req, res) => {
  const { userId } = req.params;
  viderPanierUtilisateur(userId);
  res.send('Panier vidé avec succès');
});

module.exports = router;
