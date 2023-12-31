/* eslint-disable max-len */
const express = require('express');
const {
  register, login, readAllUsers, readOneUser, readOneUserFromUsername, readIdFromUsername, addMenuLikeToUser, deleteOneUser,
} = require('../models/users');

const { authorize, isAdmin } = require('../utils/auths');

const router = express.Router();

router.get('/', (req, res) => {
  const alluser = readAllUsers();
  return res.json(alluser);
});

router.get('/:id', authorize, isAdmin, (req, res) => {
  const userfound = readOneUser(req?.params?.id);
  if (!userfound) return res.sendStatus(404);
  return res.json(userfound);
});

// For user to add a menu in favourite
router.post('/addMenuLike', async (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const menuId = req?.body?.menuId?.length !== 0 ? req.body.menuId : undefined;

  if (!username || !menuId) return res.sendStatus(404);

  const updatedUser = await addMenuLikeToUser(username, menuId);
  if (!updatedUser) return res.sendStatus(404);
  return res.json(updatedUser);
});

router.post('/username', async (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  if (!username) return res.sendStatus(400);
  const userFound = await readOneUserFromUsername(username);
  if (!userFound) return res.sendStatus(404);
  return res.json(userFound);
});

router.post('/readUserFromUsername', async (req, res) => {
  const username = req?.body?.id?.length !== 0 ? req.body.username : undefined;
  if (!username) return res.sendStatus(400);
  const returned = await readIdFromUsername(username);
  if (!returned) return res.sendStatus(404);
  return res.json(returned);
});

/* Register a user */
router.post('/register', async (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const email = req?.body?.email?.length !== 0 ? req.body.email : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;
  const phone = req?.body?.phone?.length !== 0 ? req.body.phone : undefined;
  const adresse = req?.body?.adresse?.length !== 0 ? req.body.adresse : undefined;
  const totalOrder = req?.body?.totalOrder?.length !== 0 ? req.body.totalOrder : undefined;
  const menuslIKE = req?.body?.menuslIKE?.length !== 0 ? req.body.menuslIKE : undefined;

  if (!username || !password) return res.sendStatus(400); // 400 Bad Request

  // eslint-disable-next-line max-len
  const authenticatedUser = await register(username, email, password, phone, adresse, totalOrder, menuslIKE);

  if (!authenticatedUser) return res.sendStatus(409); // 409 Conflict

  return res.json(authenticatedUser);
});

router.delete('/:id', async (req, res) => {
  const deletedUser = await deleteOneUser(req?.params?.id);
  if (!deletedUser) return res.sendStatus(404);
  return res.json(deletedUser);
});

/* Login a user */
router.post('/login', async (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!username || !password) return res.sendStatus(400); // 400 Bad Reques

  const authenticatedUser = await login(username, password);

  if (!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized

  return res.json(authenticatedUser);
});

module.exports = router;
