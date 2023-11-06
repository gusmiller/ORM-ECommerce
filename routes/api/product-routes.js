/*******************************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Gustavo Miller
 * Licensed under MIT
 * Assignment #13 - Object-Relational Mapping (ORM): 
 * E-Commerce Back End
 * 
 * Date : 11/3/2023 11:11:16 AM
 *******************************************************************/
const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

/**
 * The GET `/api/products` endpoint. We return all records. Notice that we are 
 * returning related information; using advantage of the relationships. Proper status is
 * returned upon completion -either successfull or with error
 */
router.get('/', async (req, res) => {
    try {
        const data = await Product.findAll({
            // Sequelize instruction equivalente to => SQL JOIN operation / combine data from Products tables. 
            // In this case it will return Categories and Tags objects
            include: [{ model: Category }, { model: Tag }],
        });
        res.status(200).json(data); // Successfull transaction
    } catch (error) {
        res.status(500).json(error); // Fail process
    }
});

/**
 * The GET `/api/products/1` endpoint. We return the record that matches the ID passed in request parameter. 
 * Notice that we are returning related information; using advantage of the relationships. Proper 
 * status is returned upon completion -either successfull or with error
 */
router.get('/:id', async (req, res) => {
    try {
        const data = await Product.findByPk(req.params.id, {
            // Sequelize instruction equivalente to => SQL JOIN operation / combine data from Products tables. 
            // In this case it will return Categories and Tags objects
            include: [{ model: Category }, { model: Tag }],
        });

        if (!data) {
            res.status(404).json({ message: 'No Category was found with that id!' });
            return;
        }

        res.status(200).json(data); // Successfull transaction
    } catch (error) {
        res.status(500).json(error); // Fail process
    }
});

/**
 * The POST `/api/ endpoint. Creates a new product and saved into database (product table). The information is provided
 * in the request body; notice that Product may or may not have tags.
 */
router.post('/', (req, res) => {
    /* req.body should look like this...
      {
        product_name: "Basketball",
        price: 200.00,
        stock: 3,
        tagIds: [1, 2, 3, 4]
      }
    */
    Product.create(req.body)
        .then((product) => {
            // if there's product tags, we need to create pairings to bulk create in the ProductTag model
            if (req.body.tagIds.length) {
                const productTagIdArr = req.body.tagIds.map((tag_id) => {
                    return {
                        product_id: product.id,
                        tag_id,
                    };
                });
                return ProductTag.bulkCreate(productTagIdArr);
            }
            // if no product tags, just respond
            res.status(200).json(product);
        })
        .then((productTagIds) => res.status(200).json(productTagIds))
        .catch((error) => {
            console.log(error);
            res.status(400).json(error);
        });
});

/**
 * The PUT `/api/ endpoint. This will update an existing product. There is a lot more validation in this process. 
 * TODO: I need to spend more time here - reverse engineer what it exactly does. 
 */
router.put('/:id', (req, res) => {

    // First action: update product data
    Product.update(req.body, {
        where: { id: req.params.id, },
    })
        .then((product) => {
            if (req.body.tagIds && req.body.tagIds.length) {

                ProductTag.findAll({ where: { product_id: req.params.id } })
                    .then((productTags) => {

                        // create filtered list of new tag_ids
                        const productTagIds = productTags.map(({ tag_id }) => tag_id);
                        const newProductTags = req.body.tagIds
                            .filter((tag_id) => !productTagIds.includes(tag_id))
                            .map((tag_id) => {
                                return {
                                    product_id: req.params.id,
                                    tag_id,
                                };
                            });

                        // figure out which ones to remove
                        const productTagsToRemove = productTags
                            .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
                            .map(({ id }) => id);

                        // run both actions
                        return Promise.all([
                            ProductTag.destroy({ where: { id: productTagsToRemove } }),
                            ProductTag.bulkCreate(newProductTags),
                        ]);
                    });
            }

            return res.status(200).json(product); // Return json object
        })
        .catch((error) => {
            res.status(400).json(error); // Fail process
        });
});

/**
 * The DELETE `/api/product/1` endpoint. It deletes the record that matches the ID passed. 
 * Notice that we are returning related information; using advantage of the relationships. Proper 
 * status is returned upon completion -either successfull or with error
 */
router.delete('/:id', async (req, res) => {
    try {
        const data = await Product.destroy({
            where: {
                id: req.params.id,
            },
        });

        // The update event will return the record updated if any. Validate if object is valid. In
        // case the object return an error we fail the process. Notice that this validation is different
        // from the put -just different ways same result.
        if (!data) {
            res.status(404).json({ message: `No Product found with this id (${req.params.id})!` });
            return;
        }

        res.status(200).json(data); // Successfull transaction
    } catch (error) {
        res.status(500).json(error); // Fail process
    }
});

module.exports = router;
