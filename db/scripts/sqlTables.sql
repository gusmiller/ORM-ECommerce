USE ecommerce_db;
SELECT * FROM (
SELECT "Category" as Tablename, id, category_name FROM category
union 
SELECT "Tag" as Tablename, id, tag_name FROM tag
union 
SELECT "Products" as Tablename, id, product_name FROM product
) AS DATA
WHERE Tablename="Category" or Tablename="Tag"
order by Tablename, id