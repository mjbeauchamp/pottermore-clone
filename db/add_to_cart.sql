INSERT INTO cart(quantity, product_id, user_id) VALUES (1, $2, $1);
SELECT * FROM cart
WHERE user_id = $1
ORDER BY cart.product_id ASC