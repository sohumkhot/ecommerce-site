const express = require('express');
const errorMiddleWare = require('./middleware/error');

const app = express();

// Route Imports
const products = require('./routes/productRoute');
const user = require('./routes/userRoute');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', products);
app.use('/api/v1', user);

// Middleware for Errors
app.use(errorMiddleWare);

module.exports = app;
