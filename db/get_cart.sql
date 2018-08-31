SELECT cart.product_id, cart.quantity, cart.user_id, wizard_products.product_name, wizard_products.product_image, wizard_products.product_price, wizard_products.product_description
FROM cart
LEFT OUTER JOIN wizard_products
ON cart.product_id = wizard_products.Id
where cart.user_id =$1
ORDER BY product_id ASC;