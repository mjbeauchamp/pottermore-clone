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
    //You pull the session secret variable from your .env file, which you need to create, along with installing, requiring, and configuring .env
    //BE SURE TO PUT YOUR .ENV FILE IN .GITIGNORE
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




app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
});