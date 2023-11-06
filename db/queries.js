/****************************************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #12 - SQL Content Management Systems (CMS)
 * Date : 10/29/2023 4:52:10 PM
 * 
 * Description :
 * This file contains sql statements used throughout the application.
 * These queries are standard queries with no parameters. Those type
 * of queries are taken care when needed.
 * 
 * employees: Complex Query - using CONCAT_WS to joing two string together.
 * This function in MySQL helps in joining two or more strings along 
 * with a separator. The separator must be specified by the user and it 
 * can also be a string. If the separator is NULL, then the result will
 * also be NULL. https://www.geeksforgeeks.org/concat_ws-function-in-mysql/
 *****************************************************************************/
const chalk = require("chalk");

const sql = {
    validateobject:`SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA `,
    totalrecords: 'SELECT TotalCat + TotalProd + TotalTag TotalPT FROM (SELECT (SELECT count(*) FROM ecommerce_db.category) AS TotalCat,(SELECT count(*) FROM ecommerce_db.product) AS TotalProd,(SELECT count(*) FROM ecommerce_db.tag) AS TotalTag, (SELECT count(*) FROM ecommerce_db.product_tag) AS TotalPT) AS DATA',
}

const messages = {
    mysqlLapps: chalk.bgRed("Carleton Universty Coding Bootcamp"),
}
module.exports = { sql, messages };