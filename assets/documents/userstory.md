# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## User Story

<span style="color:green;"><strong>AS A manager at an internet retail company</strong></span><br/>
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria

GIVEN a functional Express.js API

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file<br/>
<span style="color:green;">THEN I am able to connect to a database using Sequelize</span>

WHEN I enter schema and seed commands<br/>
<span style="color:green;">THEN a development database is created and is seeded with test data</span>

WHEN I enter the command to invoke the application<br/>
<span style="color:green;">THEN my server is started and the Sequelize models are synced to the MySQL database</span>

WHEN I open API GET routes in Insomnia for categories, products, or tags<br/>
<span style="color:yellow;">THEN the data for each of these routes is displayed in a formatted JSON</span>

WHEN I test API POST, PUT, and DELETE routes in Insomnia<br/>
<span style="color:yellow;">THEN I am able to successfully create, update, and delete data in my database</span>

## Getting Started <span style="color:brown;"><strong>(Done!)</strong></span>

This Challenge will require a video submission. 
Refer to the [Fullstack Blog Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for additional guidance on creating a video.

You’ll need to use the <br/>
[MySQL2](https://www.npmjs.com/package/mysql2) and <span style="color:brown;"><strong>(Done!)</strong></span> <br/>
[Sequelize](https://www.npmjs.com/package/sequelize) <span style="color:brown;"><strong>(Done!)</strong></span>, packages connect Express.js API to a MySQL database and the <br/>
[dotenv](https://www.npmjs.com/package/dotenv) <span style="color:brown;"><strong>(Done!)</strong></span> package to use environment variables to store sensitive data.

Use the `schema.sql` file in the `db` folder to create your database with MySQL shell commands. <span style="color:brown;"><strong>(Done! and Enhanced!)</strong></span>
Use environment variables to store sensitive data like your MySQL username, password, and database name. <span style="color:brown;"><strong>(Done!)</strong></span>

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.