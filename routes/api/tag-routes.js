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
const { json } = require('sequelize');
const { Tag, Product, ProductTag } = require('../../models');

/**
 * The root `/api/tags` endpoint. We return all records. Notice that we are 
 * returning related information; using advantage of the relationships. Proper status is
 * returned upon completion -either successfull or with error
 */
router.get('/', async (req, res) => {
     try {
          const data = await Tag.findAll({
               // Sequelize instruction equivalente to => SQL JOIN operation / combine data from Products tables. 
               include: [{ model: Product }],
          });
          res.status(200).json(data); // Successfull transaction
     } catch (error) {
          res.status(500).json(error); // Fail process
     }
});

/**
 * The GET `/api/tags/1` endpoint. We return the record that matches the ID passed in request parameter. 
 * Notice that we are returning related information; using advantage of the relationships. Proper 
 * status is returned upon completion -either successfull or with error
 */
router.get('/:id', async (req, res) => {
     try {
          const data = await Tag.findByPk(req.params.id, {
               // Sequelize instruction equivalente to => SQL JOIN operation / combine data from Products tables. 
               include: [{ model: Product }],
          });

          if (!data) {
               res.status(404).json({ message: 'No information was found with that id!' });
               return;
          }

          res.status(200).json(data); // Successfull transaction
     } catch (error) {
          res.status(500).json(error); // Fail process
     }
});

/**
 * The POST `/api/tags/1` endpoint. The post endpoint creates a new entry; there isn't much information 
 * here. It will either work or not; proper status is returned upon completion -either successfull or with error
 */
router.post('/', async (req, res) => {
     try {

          if (!Array.isArray(req.body) && req.body.length === undefined) {
               const data = await Tag.create(req.body);
               res.status(200).json(data); // Successfull transaction
          } else {
               
               // const { Op } = require("sequelize");
               // const lastid = await Tag.max('id');
               const data = await Tag.bulkCreate(req.body);

               // Ask Gurneesh
               // Tag.findAll({
               //      where: {
               //           id: {
               //                [Op.gt]: lastid,
               //           },
               //      },
               // })
               //      .then((results) => {
               //           console.log('Records with value greater than the threshold:');
               //           console.log(results);
               //      })
               //      .catch((error) => {
               //           console.error('Error querying the database:', error);
               //      });

               res.status(200).json(data); // Successfull transaction
          }

     } catch (error) {
          res.status(400).json(error);
     }
});

/**
 * The PUT `/api/tags/1` endpoint. It updates the record that matches the ID passed. 
 */
router.put('/:id', async (req, res) => {
     try {

          const data = await Tag.update(req.body, {
               where: {
                    id: req.params.id,
               },
          });

          // The update event will return the record updated if any. Validate if object is valid. In
          // case the object return an error we fail the process
          if (!data[0]) {
               res.status(404).json({ message: `No information found with this id (${req.params.id})!` });
               return;
          }
          res.status(200).json(data); // Successfull transaction
     } catch (error) {
          res.status(500).json(error); // Fail process
     }
});

/**
 * The DELETE `/api/tags/1` endpoint. It deletes the record that matches the ID passed. 
 * Notice that we are returning related information; using advantage of the relationships. Proper 
 * status is returned upon completion -either successfull or with error
 */
router.delete('/:id', async (req, res) => {
     try {
          const data = await Tag.destroy({
               where: {
                    id: req.params.id,
               },
          });

          // The update event will return the record updated if any. Validate if object is valid. In
          // case the object return an error we fail the process. Notice that this validation is different
          // from the put -just different ways same result.
          if (!data) {
               res.status(404).json({ message: `No information found with this id (${req.params.id})!` });
               return;
          }

          res.status(200).json(data); // Successfull transaction
     } catch (error) {
          res.status(500).json(error); // Fail process
     }
});

module.exports = router;
