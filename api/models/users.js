const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('node:path');
const escape = require('escape-html');
const { parse, serialize } = require('../utils/json');

const jwtSecret = 'ilovemypizza!';
const lifetimeJwt = 24 * 60 * 60 * 1000; // in ms : 24 * 60 * 60 * 1000 = 24h

const saltRounds = 10;

const jsonDbPath = path.join(__dirname, '/../data/users.json');

const defaultUsers = [
  {
    id: 1,
    username: 'admin',
    email: 'muhammad.haziq@student.vinci.be',
    password: bcrypt.hashSync('admin', saltRounds),
    phone: '0492',
    adresse: 'null',
    totalOrder: 1,
    menuslIKE: 2,
    isAdmin: true,
  },
];

// Pour ajouter les menus a ses favouris
async function addMenuLikeToUser(username, menuId) {
  const user = readOneUserFromUsername(username);
  if (!user) {
    return undefined; // L'utilisateur n'existe pas
  }
  // Ajouter le menuId à la liste des menus aimés par l'utilisateur
  user.menuslIKE = menuId;
  await updateUser(user);
  return user;
}

async function updateUser(updatedUser) {
  const users = parse(jsonDbPath, defaultUsers);
  const indexToUpdate = users.findIndex((user) => user.id === updatedUser.id);
  if (indexToUpdate >= 0) {
    users[indexToUpdate] = updatedUser;
    serialize(jsonDbPath, users);
  }
}

function readAllUsers() {
  const data = parse(jsonDbPath, defaultUsers);
  return data;
}
function readOneUser(id) {
  const idnumer = parseInt(id, 10);
  const usersjsn = parse(jsonDbPath, defaultUsers);
  const indexOfUserFound = usersjsn.findIndex((user) => user.id === idnumer);
  if (indexOfUserFound < 0) return undefined;
  return usersjsn[indexOfUserFound];
}

async function readIdFromUsername(username) {
  const users = parse(jsonDbPath, defaultUsers);
  const indexOfUserFound = users.findIndex((user) => user.username === username);
  if (indexOfUserFound < 0) return undefined;
  return parseInt(users[indexOfUserFound].id, 10);
}

async function login(username, password) {
  const userFound = readOneUserFromUsername(username);
  if (!userFound) return undefined;

  const passwordMatch = await bcrypt.compare(password, userFound.password);
  if (!passwordMatch) return undefined;

  const token = jwt.sign(
    { username }, // session data added to the payload (payload : part 2 of a JWT)
    jwtSecret, // secret used for the signature (signature part 3 of a JWT)
    { expiresIn: lifetimeJwt }, // lifetime of the JWT (added to the JWT payload)
  );

  const authenticatedUser = {
    username,
    token,
  };

  return authenticatedUser;
}

async function register(username, email, password, phone, adresse, totalOrder, menuslIKE) {
  const userFound = readOneUserFromUsername(username);
  if (userFound) return undefined;
  await createOneUser(username, email, password, phone, adresse, totalOrder, menuslIKE);
  const token = jwt.sign(
    { username }, // session data added to the payload (payload : part 2 of a JWT)
    jwtSecret, // secret used for the signature (signature part 3 of a JWT)
    { expiresIn: lifetimeJwt }, // lifetime of the JWT (added to the JWT payload)
  );

  const authenticatedUser = {
    username,
    token,
  };

  return authenticatedUser;
}

function readOneUserFromUsername(username) {
  const users = parse(jsonDbPath, defaultUsers);
  const indexOfUserFound = users.findIndex((user) => user.username === username);
  if (indexOfUserFound < 0) return undefined;

  return users[indexOfUserFound];
}

async function createOneUser(username, email, password, phone, adresse, totalOrder, menuslIKE) {
  const users = parse(jsonDbPath, defaultUsers);

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const createdUser = {
    id: getNextId(),
    username: escape(username),
    email: escape(email),
    password: hashedPassword,
    phone: escape(phone),
    adresse: escape(adresse),
    totalOrder: escape(totalOrder),
    menuslIKE: escape(menuslIKE),
    isAdmin: false,
  };

  users.push(createdUser);

  serialize(jsonDbPath, users);

  return createdUser;
}
function deleteOneUser(id) {
  const idNumber = parseInt(id, 10);
  const users = parse(jsonDbPath, defaultUsers);
  const foundIndex = users.findIndex((user) => user.id === idNumber);
  const isAdmin = users[foundIndex]?.isAdmin || false;
  if (foundIndex < 0 || isAdmin) return undefined;
  if (foundIndex < 0) return undefined;
  const deletedUsers = users.splice(foundIndex, 1);
  const deletedUser = deletedUsers[0];
  serialize(jsonDbPath, users);
  return deletedUser;
}

function getNextId() {
  const users = parse(jsonDbPath, defaultUsers);
  const lastItemIndex = users?.length !== 0 ? users.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = users[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

module.exports = {
  login,
  register,
  readOneUserFromUsername,
  readAllUsers,
  readOneUser,
  readIdFromUsername,
  addMenuLikeToUser,
  deleteOneUser,
};
