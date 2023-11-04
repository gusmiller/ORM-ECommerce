/*******************************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #13 - Object-Relational Mapping (ORM): 
 * E-Commerce Back End
 * Date : 11/3/2023 11:11:16 AM
 *******************************************************************/
const express = require('express');
const routes = require('./routes');
const Sequelize = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
