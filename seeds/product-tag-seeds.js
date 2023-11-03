/*******************************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #13 - Object-Relational Mapping (ORM): 
 * E-Commerce Back End
 * 
 * Date : 11/3/2023 11:11:16 AM
 *******************************************************************/
const { ProductTag } = require('../models');

const productTagData = [
    {
        product_id: 1,
        tag_id: 6,
    },
    {
        product_id: 1,
        tag_id: 7,
    },
    {
        product_id: 1,
        tag_id: 8,
    },
    {
        product_id: 2,
        tag_id: 6,
    },
    {
        product_id: 3,
        tag_id: 1,
    },
    {
        product_id: 3,
        tag_id: 3,
    },
    {
        product_id: 3,
        tag_id: 4,
    },
    {
        product_id: 3,
        tag_id: 5,
    },
    {
        product_id: 4,
        tag_id: 1,
    },
    {
        product_id: 4,
        tag_id: 2,
    },
    {
        product_id: 4,
        tag_id: 8,
    },
    {
        product_id: 5,
        tag_id: 3,
    },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
