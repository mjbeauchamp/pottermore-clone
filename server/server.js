const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const axios = require('axios');
const massive = require('massive');
const controllers = require('./controllers.js');
const session = require('express-session');

//

const app = express();

let {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET
} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(bodyParser.json());

//app.use( express.static( `${__dirname}/../build` ) );

//ENDPOINTS

//Auth endpoints
//Create new user
app.post('/auth/new_user', controllers.create_user);

//Get all usernames to verify that there are no duplicate usernames for bcrypt
app.get('/auth/all_usernames', controllers.all_usernames);

app.post('/auth/login', controllers.login);

app.get('/auth/logout', controllers.logout);

app.get('/api/current_user', controllers.current_user);

//Add an item to the user's cart
app.post('/api/cart', controllers.addToCart)
//Get all items in specific users cart
app.get('/api/cart',controllers.getCart)
//Get all items in the store
app.get('/api/products', controllers.getProducts)
//Get Cart and item details
app.get('/api/details',controllers.cartDetails)
//Delete Item from shopping Cart
app.delete('/api/product/:id',controllers.deleteProduct)
//Add Item To Cart
app.put('/api/cart', controllers.addToCart)
//Delete PRODUCT from shopping Cart
app.put('/api/delete/',controllers.deleteItem)

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
});