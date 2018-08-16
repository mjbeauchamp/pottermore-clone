UPDATE cart
SET quantity = quantity - 1
WHERE user_id = $1 AND product_id = $2;
SELECT * from cart
WHERE user_id = $1 AND product_id = $2;