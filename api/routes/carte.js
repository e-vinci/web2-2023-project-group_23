/* eslint-disable max-len */
const express = require('express');

const router = express.Router();
const {
  readOnePanierfromusername,
  addamenutoapanier,
  deleteamenuPanier,
  deleteapaniertotal,

} = require('../models/carts');

router.post('/readcarteFromUsername', async (req, res) => {
  const username = req?.body?.username.length !== 0 ? req.body.username : undefined;
  if (!username) return res.sendStatus(400);
  const returned = await readOnePanierfromusername(username);
  if (!returned) return res.sendStatus(404);
  return res.json(returned);
});

router.post('/addMenuToPanier', async (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const idmenu = req?.body?.idmenu?.length !== 0 ? req.body.idmenu : undefined;
  if (!idmenu || !username) return res.status(400).json({ error: 'Paramètres manquants' });
  await addamenutoapanier(username, idmenu);
  return res.status(200).json({ success: true });
});

router.delete('/deleteamenu', async (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const idmenu = req?.body?.id?.length !== 0 ? req.body.idmenu : undefined;
  const deletedMenu = await deleteamenuPanier(username, idmenu);
  if (!deletedMenu) return res.sendStatus(404);
  return res.json(deletedMenu);
});

router.delete('/deletepaniertotal', async (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  if (!username) return res.status(400).json({ error: 'Paramètre manquant' });

  await deleteapaniertotal(username);
  return res.status(200).json({ success: true });
});

module.exports = router;
