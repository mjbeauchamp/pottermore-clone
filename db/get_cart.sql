SELECT * FROM cart
WHERE user_id = $1
ORDER BY product_id ASC