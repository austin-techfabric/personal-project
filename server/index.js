const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');
require('dotenv').config();

const app = express();

// ===   controllers   ===

const instructor_controller = require('./controllers/instructor_controller');

// === Middlewares ===

app.use(bodyParser.json())

// === Database Connection ===

massive(process.env.CONNECTION_STRING).then(database => {
    console.log('connected to the DB')
    app.set('db', database)
    }
)
.catch(error => console.log( 'massive error' ,error));


// === Instructors Controller === 

app.get('/api/instructors', instructor_controller.get_all);
app.post('/api/instructors', instructor_controller.create_instructor)

const port = 4000;
app.listen(port, () => console.log(`listening on port ${port}`));
