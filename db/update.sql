update cart
set quantity = $2
where product_id = $1 AND user_id = $3;
SELECT cart.product_id, cart.quantity, wizard_products.product_name, wizard_products.product_image, wizard_products.product_price, wizard_products.product_description
FROM cart
LEFT OUTER JOIN wizard_products
ON cart.product_id = wizard_products.id
ORDER BY cart.product_id ASC
