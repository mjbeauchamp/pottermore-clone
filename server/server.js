const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const axios = require('axios');
const massive = require('massive');
const authControllers = require('./controllers/auth-controllers');
const sqControllers = require('./controllers/sqcontrollers');
const storeControllers = require('./controllers/store-controllers');
const session = require('express-session');
const bypass = require('./middleware');
const stripe=require('stripe')(process.env.STRIPE)



const app = express();
app.use(require("body-parser").text());

let {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET
} = process.env;

massive(CONNECTION_STRING).then(db => {
    console.log('db set')
    app.set('db', db);
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(bodyParser.json());

app.use( express.static( `${__dirname}/../build` ) );

//ENDPOINTS

//Auth endpoints
//Create new user

// app.use(bypass.byId(8))

app.post('/auth/new_user', authControllers.create_user);

//Get all usernames to verify that there are no duplicate usernames for bcrypt
app.get('/auth/all_usernames', authControllers.all_usernames);

app.post('/auth/login', authControllers.login);

app.get('/auth/logout', authControllers.logout);

app.get('/api/current_user', authControllers.current_user);

// Here will lie the endpoints for the quiz pages.

app.get('/api/sortingquiz/questions', sqControllers.sortingQuestions)

app.get('/api/sortingquiz/answers', sqControllers.sortingAnswers)

app.put('/api/sortingquiz/house/:housename', sqControllers.schoolHouse)

app.get(`/api/quizhome/togglequizselect`, authControllers.getHouse)

//Add an item to the user's cart
app.post('/api/cart', storeControllers.addToCart)
//Get all items in specific users cart
app.get('/api/cart',storeControllers.getCart)
//Get all items in the store
app.get('/api/products', storeControllers.getProducts)
//Get Cart and item details
app.get('/api/details',storeControllers.cartDetails)
//Delete Item from shopping Cart
app.delete('/api/product/:id',storeControllers.deleteProduct)
//Delete Shopping cart
app.delete('/api/cart', storeControllers.deleteCart)
//Add Item To Cart
app.put('/api/cart', storeControllers.addToCart)
//Delete PRODUCT from shopping Cart
app.put('/api/delete/',storeControllers.deleteItem)
app.put('/api/cart/:id/:quantity', storeControllers.update)

// Dashboard
app.get('/api/wizards', authControllers.getHouse);
////////STRIPE////////
// app.post("/charge", async (req, res) => {
//     try {
//       let {status} = await stripe.charges.create({
//         amount: 1675,
//         currency: "usd",
//         description: "An example charge",
//         source: req.body
//       });
  
//       res.json({status});
//     } catch (err) {
//       res.status(500).end();
//     }
//   });



app.post('/api/payment', function(req, res, next){
    //convert amount to pennies
    console.log(11111111111, typeof req.body)
    const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
      if(amountArray[i] === ".") {
        if (typeof amountArray[i + 1] === "string") {
          pennies.push(amountArray[i + 1]);
        } else {
          pennies.push("0");
        }
        if (typeof amountArray[i + 2] === "string") {
          pennies.push(amountArray[i + 2]);
        } else {
          pennies.push("0");
        }
          break;
      } else {
          pennies.push(amountArray[i])
      }
    }


    const convertedAmt = parseInt(pennies.join(''));
  
    const charge = stripe.charges.create({
    amount: convertedAmt, 
    currency: 'usd',
    source: req.body.token.id,
    description: 'Test charge from react app'
  }, function(err, charge) {
      if (err) return res.sendStatus(500)
      return res.sendStatus(200);
      
  });
  })
  //////////END STRIPE/////////////

app.listen(SERVER_PORT, () => {
    console.log(`Server docked in port ${SERVER_PORT}`)
});