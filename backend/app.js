const express = require('express');

const app = express();

// Route Imports
const products = require('./routes/productRoute');

app.use(express.urlencoded({ extended: true }))
app.use(express.json()); 
app.use('/api/v1', products);


module.exports = app;