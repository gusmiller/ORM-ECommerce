/*******************************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #13 - Object-Relational Mapping (ORM): 
 * E-Commerce Back End
 * 
 * Date : 11/3/2023 11:11:16 AM
 *******************************************************************/
const { Category } = require('../models');

const categoryData = [
    {category_name: 'Shirts',},
    {category_name: 'Shorts',},
    {category_name: 'Music',},
    {category_name: 'Hats',},
    {category_name: 'Shoes',},
    {category_name: 'Jackets',},
    {category_name: 'Condiments',},
    {category_name: 'Fruits',},
    {category_name: 'Snacks',},
    {category_name: 'Dairies',},
    {category_name: 'Breads',},
    {category_name: 'Households',}
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
