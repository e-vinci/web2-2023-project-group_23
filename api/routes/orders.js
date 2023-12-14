const express = require('express');
const { readAllOrders } = require('../models/order');

const router = express.Router();

router.get('/', (req, res) => {
  const allorders = readAllOrders();
  return res.json(allorders);
});
module.exports = router;
