/*******************************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #13 - Object-Relational Mapping (ORM): 
 * E-Commerce Back End
 * 
 * Date : 11/3/2023 11:11:16 AM
 *******************************************************************/

// The express.Router() function is used to create a new router object. This function is used 
// when you want to create a new router object in your program to handle requests. 
// https://www.geeksforgeeks.org/express-js-express-router-function
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// Error endpoint - display a gracefull error
router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;