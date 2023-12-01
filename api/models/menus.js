const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/menus.json');

const defaultMenus = [
  {
    id: 1,
    title: 'Classic Burger Menu',
    Type: 'Burger',
    description: 'Le gentleman du burger saura t´ouvrir l´appétit. Composé d´un Steak Frais de race, d´Oignons Caramélisés, de Tomate, de Salade, de Cornichons, de Cheddar et de son appétissante sauce Classic.',
    price: 14,
  },
  {
    id: 2,
    title: 'French Burger Menu',
    type: 'Burger',
    description: 'Renoue avec la French touch en profitant de notre burger composé d´un Steak Frais de Race, de Champignons, de Ciboulette, d´Oignons Rouges, de Mâche, d´Emmental, et de l´onctueuse sauce Cream',
    price: 14,
  },
  {
    id: 2,
    type: 'French Burger Menu',
    sepcification: 'Burger',
    description: 'Renoue avec la French touch en profitant de notre burger composé d´un Steak Frais de Race, de Champignons, de Ciboulette, d´Oignons Rouges, de Mâche, d´Emmental, et de l´onctueuse sauce Cream',
    price: 14,
  },
  {
    id: 3,
    title: 'MEXICO Burger Menu',
    type: 'Burger',
    description: 'Ce burger à couper le souffle avec sa sauce Tabasco en feat avec une sauce BBQ d´exception. Toujours accompagné de son Steak Frais de Race 125g du Bacon de Boeuf, d´un Œuf de Salade et de Cheddar',
    price: 14.99,
  },
  {
    id: 4,
    title: 'WEST COAST Menu',
    type: 'Burger',
    description: 'Le burger le plus Hype de la côte ouest se compose d´un Steak Frais de Race, d´Oignons Caramélisés, d´Oignons Frits, de Cornichons, de Salade, de Double Cheddar et de l´inimitable Sauce West Coast',
    price: 14.99,
  },
  {
    id: 5,
    title: 'Sriracha Chicken Supreme',
    type: 'Pizza',
    description: 'Chicken Tasty, sriracha mayo, poivrons rouges, oignons frits, persil, sauce tomate, mozzarella',
    price: 20.10,
  },
  {
    id: 6,
    title: 'Margherita',
    type: 'Pizza',
    description: 'Loriginale pizza de base, avec une sauce tomate et de la mozzarella',
    price: 14.99,
  },
  {
    id: 7,
    title: 'Hot n Spicy',
    type: 'Pizza',
    description: 'Viande de boeuf épicée, piments verts, oignons rouges, dés de tomates, mozzarella et sauce tomate',
    price: 18.60,
  },
  {
    id: 8,
    title: 'Hawaiian',
    type: 'Pizza',
    description: 'La douceur de lananas accompagnée de jambon, champignons, mozzarella et sauce tomate',
    price: 18.60,
  },
  {
    id: 9,
    title: 'Spicy Love',
    type: 'Sushis',
    description: 'Poulet, concombre, fromage frais, sauce spicy, sauce chili, oignons frits',
    price: 8.60,
  },
  {
    id: 10,
    title: 'Crusty Chicken',
    type: 'Sushis',
    description: 'Poulet, poivrons, sauce unagi, oignons jeunes',
    price: 8.90,
  },
  {
    id: 11,
    title: 'Donburi Poulet Karaage',
    type: 'Donburi',
    description: 'Beignets de poulets à la japonaise accompagnés de petits légumes sautés',
    price: 14.90,
  },
  {
    id: 12,
    title: 'Poké Katsu Chicken',
    type: 'Poké',
    description: 'Poulet Katsu accompagné de choux rouges, carottes râpées, mangues, guacamole et edamame. Assaisonné de sauce Unagui et Makifiver surmontée de sésame mixte, doignons frits, le tout sur un lit de riz vinaigré.',
    price: 14.90,
  },

];

function readAllMenus(orderBy) {
  const orderByTitle = orderBy?.includes('title') ? orderBy : undefined;
  let orderedMenu;
  const menus = parse(jsonDbPath, defaultMenus);
  if (orderByTitle) orderedMenu = [...menus].sort((a, b) => a.title.localeCompare(b.title));
  if (orderByTitle === '-title') orderedMenu = orderedMenu.reverse();
  const allMenussPotentiallyOrderd = orderedMenu ?? menus;
  return allMenussPotentiallyOrderd;
}

function readOneMenus(id) {
  const idNumber = parseInt(id, 10);
  const menus = parse(jsonDbPath, defaultMenus);
  const indexOfMenuFound = menus.findIndex((menu) => menu.id === idNumber);
  if (indexOfMenuFound < 0) return undefined;
  return menus[indexOfMenuFound];
}

function createOneMenus(title, type, description, price) {
  const menus = parse(jsonDbPath, defaultMenus);

  const createMenu = {
    id: getNextId(),
    title,
    type,
    description,
    price,
  };

  menus.push(createMenu);
  serialize(jsonDbPath, defaultMenus);
  return createMenu;
}

function getNextId() {
  const menus = parse(jsonDbPath, defaultMenus);
  const lastItemIndex = menus?.length !== 0 ? menus.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = menus[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

function deleteOneMenu(id) {
  const idNumber = parseInt(id, 10);
  const menus = parse(jsonDbPath, defaultMenus);
  const foundIndex = menus.findIndex((menu) => menu.id === idNumber);
  if (foundIndex < 0) return undefined;
  const deletedMenus = menus.splice(foundIndex, 1);
  const deletedMenu = deletedMenus[0];
  serialize(jsonDbPath, menus);

  return deletedMenu;
}

module.exports = {
  readAllMenus,
  readOneMenus,
  createOneMenus,
  deleteOneMenu,
};
