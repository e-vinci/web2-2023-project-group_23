const express = require('express');

const {
  readAllMenus,
  readOneMenus,
} = require('../models/menus');

const router = express.Router();

router.get('/', (req, res) => {
  const allMenusPotentiallyOrdered = readAllMenus(req?.query?.order);
  return res.json(allMenusPotentiallyOrdered);
});

router.get('/:id', (req, res) => {
  const foundMenu = readOneMenus(req.params.id);

  if (!foundMenu) return res.sendStatus(404);

  return res.json(foundMenu);
});
module.exports = router;
