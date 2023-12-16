const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:8080', 'https://e-baron.github.io'],
};

const usersRouter = require('./routes/users');
const pizzaRouter = require('./routes/pizzas');
const authsRouter = require('./routes/auths');
const menuRouter = require('./routes/menus');
const orderRouter = require('./routes/orders');
const cartRouter = require('./routes/carte');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors(corsOptions));

app.use('/users', usersRouter);
app.use('/pizzas', pizzaRouter);
app.use('/auths', authsRouter);
app.use('/menus', menuRouter);
app.use('/order', orderRouter);
app.use('/cart', cartRouter);

module.exports = app;
