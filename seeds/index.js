/*******************************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #13 - Object-Relational Mapping (ORM): 
 * E-Commerce Back End
 * 
 * Date : 11/3/2023 11:11:16 AM
 *******************************************************************/
const sequelize = require('../config/connection');
const chalk = require('chalk');

const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');
const validate = require("../db/initdb");
const messages = require("../helpers/formatter")

const seedAll = async () => {

    // Validate database exists or not. This function I have created for assignmet #12 and I see
    // fit to use it here.
    // https://github.com/gusmiller/CMS-Database/blob/main/db/initdb.js
    response = await validate.validateDB(process.env.DB_NAME); // Retrieve data from table

    // As shown above, sync({ force: true }) and sync({ alter: true }) can be destructive operations. 
    // Therefore, they are not recommended for production-level software.
    // https://sequelize.org/docs/v6/core-concepts/model-basics/#synchronization-in-production
    await sequelize.sync({ force: true });
    messages.msg(chalk.bgGreen('----- DATABASE SYNCED -----'), null, null, 80);

    await seedCategories();
    messages.msg(chalk.bgGreen('----- CATEGORIES SEEDED -----'), null, null, 80);

    await seedProducts();
    messages.msg(chalk.bgGreen('----- PRODUCTS SEEDED -----'), null, null, 80);

    await seedTags();
    messages.msg(chalk.bgGreen('----- TAGS SEEDED -----'), null, null, 80);

    await seedProductTags();
    messages.msg(chalk.bgGreen('----- PRODUCT TAGS SEEDED -----'), null, null, 80);

    process.exit(0);

};

seedAll();
