/*******************************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #13 - Object-Relational Mapping (ORM): 
 * E-Commerce Back End
 * 
 * Date : 11/3/2023 11:11:16 AM
 *******************************************************************/
require('dotenv').config();

const Sequelize = require('sequelize');
const mysql = require('mysql2/promise');

exports.connectmysql = async function database() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_SYS
        });
        return connection;
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

exports.sysdatabase = new Sequelize(
    process.env.DB_SYS,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
);

/**
 * This sequalize looks like is using a ternary conditional to whether we use JawsDB or
 * local MySQL Server as our source database. Pretty slick code
 */
exports.jawsequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
        },
    });