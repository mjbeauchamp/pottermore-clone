update cart
set quantity = quantity + 1
where product_id = $2 AND user_id = $1;
SELECT cart.product_id, cart.quantity, wizard_products.product_name, wizard_products.product_image, wizard_products.product_price, wizard_products.product_description
FROM cart
LEFT OUTER JOIN wizard_products
ON cart.product_id = wizard_products.id
ORDER BY cart.product_id ASC
