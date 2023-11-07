/*******************************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #13 - Object-Relational Mapping (ORM): 
 * E-Commerce Back End
 * 
 * Date : 11/3/2023 11:11:16 AM
 *******************************************************************/
const { Tag } = require('../models');

const tagData = [
    {tag_name: 'rock music',},
    {tag_name: 'pop music',},
    {tag_name: 'blue',},
    {tag_name: 'red',},
    {tag_name: 'green',},
    {tag_name: 'white',},
    {tag_name: 'gold',},
    {tag_name: 'pop culture',},
    {tag_name: 'kitchen',},
    {tag_name: 'spices',},
    {tag_name: 'cooking',},
    {tag_name: 'baking',},
    {tag_name: 'breakfast',},
    {tag_name: 'meals',},
    {tag_name: 'dinner',}
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
