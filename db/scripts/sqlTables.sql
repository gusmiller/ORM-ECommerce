USE ecommerce_db;
SELECT "Category" as Tablename, id, category_name FROM category
union 
SELECT "Tag" as Tablename, id, tag_name FROM tag
union 
SELECT "Products" as Tablename, id, product_name FROM product
order by Tablename, id