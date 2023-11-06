# 13 Object-Relational Mapping (ORM): E-Commerce Back End

### ~~Database Models~~ <span style="color:brown;"><strong>(Done!)</strong></span>

<details style="margin-bottom: 25px; margin-top: 25px;">
	<summary>Your database should contain the following four models, including the requirements listed for each model</summary>

* `Category` <span style="color:brown;"><strong>(Done!)</strong></span>
  * `id`
    * Integer.
    * Doesn't allow null values.  
    * Set as primary key.  
    * Uses auto increment.

  * `category_name`  
    * String.  
    * Doesn't allow null values.

* `Product` <span style="color:brown;"><strong>(Done!)</strong></span>
  * `id`  
    * Integer.  
    * Doesn't allow null values.  
    * Set as primary key.  
    * Uses auto increment.

  * `product_name`  
    * String.  
    * Doesn't allow null values.

  * `price`  
    * Decimal.  
    * Doesn't allow null values.  
    * Validates that the value is a decimal.

  * `stock`  
    * Integer.  
    * Doesn't allow null values.  
    * Set a default value of `10`.  
    * Validates that the value is numeric.

  * `category_id`  
    * Integer.  
    * References the `Category` model's `id`.

* `Tag` <span style="color:brown;"><strong>(Done!)</strong></span>
  * `id`  
    * Integer.  
    * Doesn't allow null values.  
    * Set as primary key.  
    * Uses auto increment.

  * `tag_name`  
    * String.

* `ProductTag` <span style="color:brown;"><strong>(Done!)</strong></span>
  * `id`
    * Integer.
    * Doesn't allow null values.
    * Set as primary key.
    * Uses auto increment.

  * `product_id`
    * Integer.
    * References the `Product` model's `id`.

  * `tag_id`
    * Integer.
    * References the `Tag` model's `id`.
</details>

### ~~Associations~~ <span style="color:brown;"><strong>(Done!)</strong></span>

<details>
<summary>You'll need to execute association methods on your Sequelize models to create the following relationships between them:</summary>

* `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.
* `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.  <span style="color:brown;"><strong>(Done!)</strong></span>

> **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.

</details>

### Fill Out the API Routes to Perform RESTful CRUD Operations

Fill out the unfinished routes in `product-routes.js`, `tag-routes.js`, and `category-routes.js` to perform create, read, update, and delete operations using your Sequelize models.

Note that the functionality for creating the many-to-many relationship for products has already been completed for you.

> **Hint**: Be sure to look at the mini-project code for syntax help and use your model's column definitions to figure out what `req.body` will be for POST and PUT routes!

### ~~Seed the Database~~ <span style="color:brown;"><strong>(Done!)</strong></span>

After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.

### ~~Sync Sequelize to the Database on Server Start~~ <span style="color:brown;"><strong>(Done!)</strong></span>

Create the code needed in `server.js` to sync the Sequelize models to the MySQL database on server start.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.