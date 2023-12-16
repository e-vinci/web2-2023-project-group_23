const express = require('express');

const {
  readAllMenus,
  readOneMenus,
  deleteOneMenu,
  createOneMenu,
  updatePartiallyOneMenu,
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

// Create a Menu
router.post('/', (req, res) => {
  const title = req?.body?.title?.trim()?.length !== 0 ? req.body.title : undefined;
  const type = req?.body?.type?.trim().length !== 0 ? req.body.type : undefined;
  // eslint-disable-next-line max-len
  const description = req?.body?.description?.trim().length !== 0 ? req.body.description : undefined;
  const price = typeof req?.body?.price !== 'number' || req.body.price < 0
    ? undefined
    : req.body.price;
  const imagelink = req?.body?.imagelink?.trim().length !== 0 ? req.body.imagelink : undefined;

  if (!title || !type || !description || !price || !imagelink) return res.sendStatus(400);

  const createdMenu = createOneMenu(title, type, description, price, imagelink);

  return res.json(createdMenu);
});

// Delete a Menu
router.delete('/:id', async (req, res) => {
  const deletedMenu = await deleteOneMenu(req?.params?.id);
  if (!deletedMenu) return res.sendStatus(404);
  return res.json(deletedMenu);
});

// Update one or more properties of a Menu identified by its id
router.patch('/:id', (req, res) => {
  const title = req?.body?.title;
  const type = req?.body?.type;
  const description = req?.body?.description;
  const price = req?.body?.price;
  const imagelink = req?.body?.imagelink;

  if (
    !req.body
    || (title !== undefined && !title.trim())
    || (type !== undefined && !type.trim())
    || (description !== undefined && !description.trim())
    || (price !== undefined && (typeof req?.body?.price !== 'number' || price < 0))
    || (imagelink !== undefined && !imagelink.trim())
  ) { return res.sendStatus(400); }

  const updatedMenu = updatePartiallyOneMenu(req?.params?.id, req?.body);

  if (!updatedMenu) return res.sendStatus(404);

  return res.json(updatedMenu);
});

module.exports = router;
