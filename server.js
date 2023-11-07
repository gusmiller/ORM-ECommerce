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
const initializedatabase = require('./db/initdb')
const chalk = require('chalk');
const seeding = require('./seeds/customseed');
const messages = require("./helpers/formatter")
const dic = require("./db/queries");

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
process.stdout.write("\x1Bc");

// Validate database exists or not. This function I have created for assignmet #12 and I see
// fit to use it here.
// https://github.com/gusmiller/CMS-Database/blob/main/db/initdb.js
initializedatabase.validateDB(process.env.DB_NAME)
     .then((data) => {

          if (data.created === true && data.data === false) {
               const sequelize = require('./config/connection');

               sequelize.sync({ force: false })
                    .then(() => {
                         seeding.seedAll(sequelize)
                              .then(() => {
                                   messages.apiendpoints();
                                                                           
                                   app.listen(PORT, () => messages.msg(dic.messages.listeningdata, null, null, 80));
                                   messages.msg(chalk.white('Application PORT :'), null, false);
                                   messages.msg(chalk.white(`     Port number : ${PORT}`), null, true);
                              });

                    });

          } else {
               messages.apiendpoints();
               
               app.listen(PORT, () => messages.msg(messages.msg(dic.messages.listeningdata), null, null, 80));
               messages.msg(chalk.white('Application PORT :'), null, false);
               messages.msg(chalk.white(`     Port number : ${PORT}`), null, true);
          
          }
     });