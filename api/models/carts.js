const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/carts.json');

const defaultPaniers = [
  {
    menuid: [1, 2],
    username: 'admin',
  },

];

function deleteapaniertotal(username) {
  const usersbuckets = parse(jsonDbPath, defaultPaniers);
  const indexOfUserFound = usersbuckets.findIndex((user) => user.username === username);
  if (indexOfUserFound !== -1) {
    // L'utilisateur a un panier, procédez à la suppression de l'utilisateur
    usersbuckets.splice(indexOfUserFound, 1);

    // Enregistrez les changements dans le fichier JSON
    serialize(jsonDbPath, usersbuckets);
  }
}

function readOnePanierfromusername(usernameBucket) {
  const usersbuckets = parse(jsonDbPath, defaultPaniers);
  const indexOfUserFound = usersbuckets.findIndex((user) => user.username === usernameBucket);
  if (indexOfUserFound < 0) return undefined;
  return usersbuckets[indexOfUserFound];
}

function addamenutoapanier(username, idmenu) {
  const usersbuckets = parse(jsonDbPath, defaultPaniers);
  const indexOfUserFound = usersbuckets.findIndex((user) => user.username === username);

  if (indexOfUserFound === -1) {
    // L'utilisateur n'a pas encore de panier, créer un nouveau panier pour cet utilisateur
    const newUserPanier = { username, menuid: [idmenu] };
    usersbuckets.push(newUserPanier);
  } else {
    // Vérifier si l'identifiant du menu existe déjà dans la liste menuid
    const userPanier = usersbuckets[indexOfUserFound];
    if (!userPanier.menuid.includes(idmenu)) {
      // Ajouter l'identifiant du menu à la liste menuid s'il n'existe pas encore
      userPanier.menuid.push(idmenu);
    }
  }
  // Enregistrez les changements dans le fichier JSON
  serialize(jsonDbPath, usersbuckets);
}

function deleteamenuPanier(username, idmenu) {
  const usersbuckets = parse(jsonDbPath, defaultPaniers);
  const indexOfUserFound = usersbuckets.findIndex((user) => user.username === username);

  if (indexOfUserFound !== -1) {
    // L'utilisateur a un panier, procédez à la suppression de l'identifiant du menu
    const userPanier = usersbuckets[indexOfUserFound];
    const menuIndex = userPanier.menuid.indexOf(idmenu);

    if (menuIndex !== -1) {
      // L'identifiant du menu a été trouvé, le supprimer de la liste menuid
      userPanier.menuid.splice(menuIndex, 1);

      // Enregistrez les changements dans le fichier JSON
      serialize(jsonDbPath, usersbuckets);
    }
  }
}

module.exports = {
  readOnePanierfromusername, addamenutoapanier, deleteamenuPanier, deleteapaniertotal,
};
