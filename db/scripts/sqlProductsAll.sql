use ecommerce_db;
select p.id, product_name, price, stock, p.category_id, category_name, tag_name
from product as p
	left join category as c on c.id=p.category_id
	left join product_tag pt on pt.product_id=p.id
	left join tag on tag.id=pt.tag_id;