/*******************************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #13 - Object-Relational Mapping (ORM): 
 * E-Commerce Back End
 * 
 * Date : 11/3/2023 11:11:16 AM
 *******************************************************************/
const sequelize = require('../config/connection').initialsequelize;
const chalk = require('chalk');

const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');
const validate = require("../db/initdb");

const seedAll = async () => {

    // Validate database exists or not. This function I have created for assignmet #12 and I see
    // fit to use it here.
    // https://github.com/gusmiller/CMS-Database/blob/main/db/initdb.js
    response = await validate.validateDB(process.env.DB_NAME); // Retrieve data from table

    // As shown above, sync({ force: true }) and sync({ alter: true }) can be destructive operations. 
    // Therefore, they are not recommended for production-level software.
    // https://sequelize.org/docs/v6/core-concepts/model-basics/#synchronization-in-production
    await sequelize.sync({ force: true });
    console.log(chalk.bgGreen('\n----- DATABASE SYNCED -----\n'));

    await seedCategories();
    console.log(chalk.bgGreen('\n----- CATEGORIES SEEDED -----\n'));

    await seedProducts();
    console.log(chalk.bgGreen('\n----- PRODUCTS SEEDED -----\n'));

    await seedTags();
    console.log(chalk.bgGreen('\n----- TAGS SEEDED -----\n'));

    await seedProductTags();
    console.log(chalk.bgGreen('\n----- PRODUCT TAGS SEEDED -----\n'));

    process.exit(0);

};

seedAll();
