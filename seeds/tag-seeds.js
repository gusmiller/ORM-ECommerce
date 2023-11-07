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
    {tag_name: 'Rock Music',},
    {tag_name: 'Pop Music',},
    {tag_name: 'Blue',},
    {tag_name: 'Red',},
    {tag_name: 'Green',},
    {tag_name: 'White',},
    {tag_name: 'Gold',},
    {tag_name: 'Pop Culture',},
    {tag_name: 'Kitchen',},
    {tag_name: 'Spices',},
    {tag_name: 'Cooking',},
    {tag_name: 'Baking',},
    {tag_name: 'Breakfast',},
    {tag_name: 'Meals',},
    {tag_name: 'Dinner',}
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
