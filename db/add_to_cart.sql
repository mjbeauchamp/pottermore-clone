INSERT INTO cart(quantity, product_id) VALUES (1, $1);
SELECT * FROM cart
ORDER BY product_id ASC