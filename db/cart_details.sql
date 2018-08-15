SELECT cart.product_id, cart.quantity, wizard_products.product_name, wizard_products.product_image, wizard_products.product_price
FROM cart
LEFT OUTER JOIN wizard_products
ON cart.product_id = wizard_products.id;