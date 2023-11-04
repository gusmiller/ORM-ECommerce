const connection = require("../config/connection").connectmysql;
const Chalk = require('chalk');

/**
 * This function will validate the database exists or not. This saves 1 step to manually create the
 * database prior to running the application.
 * @param {string} value - database to validate
 * @returns 
 */
exports.validateDB = async function (value) {
    const cnn = await connection(); // Get connection to database

    const [rows, fields] = await cnn.execute(`SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME="${value}"`);

    if (rows.length === 0) {
        await cnn.query(`CREATE DATABASE ecommerce_db;`);
        console.log(Chalk.bgGreen(`Run query: CREATE DATABASE ecommerce_db`));
    };
    return true;
}