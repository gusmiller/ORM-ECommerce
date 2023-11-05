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
const sequelize = require('./config/connection');
const chalk = require('chalk');

// Express.js is a NodeJS web framework used on the back-end (or server-side) 
// of websites and web applications.
// https://expressjs.com/en/5x/api.html
const app = express();
const PORT = process.env.PORT || 3001;

// Start of middleware section ************************

// This is a built-in middleware function in Express. It parses incoming requests 
// with JSON payloads and is based on body-parser.
// https://expressjs.com/en/5x/api.html
app.use(express.json());

// Returns middleware that only parses urlencoded bodies and only looks at requests 
// where the Content-Type header matches the type option. This parser accepts only 
// UTF-8 encoding of the body.
app.use(express.urlencoded({ extended: true }));

// End of middleware section **************************

app.use(routes); // Routing defined in the ./routes index.js

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(chalk.bgGreen('Now listening')));
});