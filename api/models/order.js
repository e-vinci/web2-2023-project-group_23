const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/orders.json');
const today = new Date();
const dday = today.toLocaleDateString('en-US', { weekday: 'long' }); // Obtient le nom du jour
const ttime = today.toLocaleTimeString('en-US'); // Obtient l'heure actuelle au format AM/PM

const defaultOrders = [{
  id: 1,
  adresse: 'Rue de serbie',
  day: dday,
  time: ttime,
  status: 'PENDING',
  menur: [1, 2],

}];

function readAllOrders() {
  const data = parse(jsonDbPath, defaultOrders);
  return data;
}

function createOneOrder(adresse, day, time, status, menu = []) {
  const orders = parse(jsonDbPath, defaultOrders);
  const createOrder = {
    id: getNextId(),
    adresse,
    day,
    time,
    status,
    menu,
  };
  orders.push(createOrder);
  serialize(jsonDbPath, defaultOrders);
  return createOrder;
}

function getNextId() {
  const orders = parse(jsonDbPath, defaultOrders);
  const lastItemIndex = orders?.length !== 0 ? orders.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = orders[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

module.exports = { createOneOrder, readAllOrders };
