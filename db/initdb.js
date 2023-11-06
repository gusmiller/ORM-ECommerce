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

const connection = require("../config/newdb");
const Chalk = require('chalk');
const mysql = require('mysql2/promise');

/**
 * This function will validate the database exists or not. This saves 1 step to manually create the
 * database prior to running the application.
 * @param {string} value - database to validate
 * @returns 
 */
exports.validateDB = async function (value) {
    const cnn = await connection.connectmysql(); // Get connection to database

    const [rows, fields] = await cnn.execute(`SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME="${value}"`);

    if (rows.length === 0) {
        await cnn.query(`CREATE DATABASE IF NOT EXISTS ${value};`);
        console.log(Chalk.bgGreen(`Run query: CREATE DATABASE IF NOT EXISTS ${value}`));
    } else {
        console.log(Chalk.bgGreen(`DATABASE ${value} ALREADY EXISTS!`));
    };
    return true;
}