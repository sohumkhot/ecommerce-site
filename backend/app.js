const express = require("express");
const errorMiddleWare = require("./middleware/error");

const app = express();

// Route Imports
const products = require("./routes/productRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1", products);

// Middleware for Errors
app.use(errorMiddleWare);

module.exports = app;
