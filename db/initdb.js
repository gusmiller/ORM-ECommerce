/*******************************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #13 - Object-Relational Mapping (ORM): 
 * E-Commerce Back End
 * 
 * Date : 11/4/2023 19:11:16 PM
 *******************************************************************/
require('dotenv').config();
const figlet = require("figlet");

const connection = require("../config/newdb");
const Chalk = require('chalk');
const mysql = require('mysql2/promise');
const messages = require("../helpers/formatter")
const dic = require("./queries");

/**
 * This function will validate the database exists or not. This saves 1 step to manually create the
 * database prior to running the application.
 * @param {string} value - database to validate
 * @returns 
 */
exports.validateDB = async function (value) {
     const cnn = await connection.connectmysql(); // Get connection to database

     displayMessage("e-Commerce Express");

     const [rows, fields] = await cnn.execute(dic.sql.validateobject + `WHERE SCHEMA_NAME="${value}"`);

     if (rows.length === 0) {
          await cnn.query(`CREATE DATABASE IF NOT EXISTS ${value};`);
          messages.msg(Chalk.bgRed(dic.messages.createdatabase + `${value}`), null, null, 80);
          return { created: true, data: false };

     } else {
          const [rows, fields] = await cnn.query(dic.sql.totalrecords)
          if (rows[0].TotalPT !== 0) {
               messages.msg(Chalk.bgGreen(`DATABASE ${value} ALREADY EXISTS!`));
               return { created: true, data: true };
          } else {
               messages.msg(Chalk.red(`DATABASE ${value} ALREADY EXISTS!`));
               return { created: true, data: false };
          }
     };

}

function displayMessage(message) {
     figlet(message, function (err, data) {
          if (err) {
               console.log("Something went wrong...");
               console.dir(err);
               return;
          }
          console.log(data);
     });
}
