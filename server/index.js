const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');
require('dotenv').config();

const app = express();

// ===   controllers   ===

const instructor_controller = require('./controllers/instructor_controller');
const user_controller = require('./controllers/user_controller');

// === Middlewares ===

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365
    }
   }));
   app.use(express.static(`${__dirname}/../build`));


// === Database Connection ===

massive(process.env.CONNECTION_STRING).then(database => {
    console.log('connected to the DB')
    app.set('db', database)
    }
)
.catch(error => console.log( 'massive error' ,error));


// === Instructors Controller === 

app.get('/api/instructors', instructor_controller.get_all);
app.post('/api/instructors', instructor_controller.create_instructor);

// === User Controller ===

app.get('/api/users', user_controller.get_all);
app.post('/api/users', user_controller.create_user);

// === Instructor Profile Controller

// app.get(`/api/instructor_profile/:id`, user_controller.get_profile);
app.post(`/api/instructor_profile/:id`, user_controller.create_user);



const port = 4000;
app.listen(port, () => console.log(`listening on port ${port}`));
