CREATE TABLE cart(
id SERIAL PRIMARY KEY NOT NULL,
quantity INTEGER NOT NULL,
product_id INTEGER REFERENCES wizard_products(id) UNIQUE NOT NULL,
user_id INTEGER REFERENCES wizard_users(id)UNIQUE NOT NULL
)