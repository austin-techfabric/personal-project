const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');
require('dotenv').config();

const app = express();

// ===   controllers   === \\

const instructor_controller = require('./controllers/instructor_controller');
const user_controller = require('./controllers/user_controller');

// === Middlewares === \\

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
    maxAge: 1000 * 60 * 60 *  24 * 365
    }
   }));
   app.use(express.static(`${__dirname}/../build`));

// === Auth0 === \\


app.get(`/auth/callback`, (req, res) => {
    const payload = {
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`,
    };
    function tradeCodeForAccessToken() {
        return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload)
    };
    function tradeAccessTokenForUserInfo(accessTokenResponse) {
        const accessToken = accessTokenResponse.data.access_token;
        return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${accessToken}`)
    };
    function storeUserInfoInDataBase(response) {
        const auth0Id = response.data.sub;
        console.log(' auth0Id',auth0Id);
        const db = req.app.get('db');
        return db.get_instructor_by_auth0_id(auth0Id).then(instructors => {
            if(instructors.length) {
                console.log('user found');
                const instructor = instructors[0];
                req.session.instructor = instructor;
                res.redirect('/instructor_create_profile');
            } else {
                console.log('user not found, creating');
                let {name, email} = response.data;
                console.log(auth0Id, name, email);
                
                // const userRecordValues = {
                //     auth0Id,
                //     name,
                //     email,
                // };
                //Login with Google to test instructors[0]
                return db.create_instructor([auth0Id, name,  email]).then(newlyCreatedUser => {
                    console.log('newlyCreatedUser', newlyCreatedUser)
                    req.session.instructor = newlyCreatedUser;
                    res.redirect('/instructor_create_profile')
                }).catch(err => {
                    console.log('(create_instructor) error in create_instructor', err)
                    res.status(500).send('Unexpected error ')
                })
            }
        }).catch(err => {
            console.log('error in get_instructor_by_auth0_id', err)
            res.status(500).send('An unknown error occurred')
    })  
    }
    tradeCodeForAccessToken()
    .then(tradeAccessTokenForUserInfo)
    .then(storeUserInfoInDataBase)
    .catch(err => {console.log('(tradeCodeForAccessToken) error', err)
    res.status(500).send(' Error on server during auth')    
})
})


// === Database Connection === \\

massive(process.env.CONNECTION_STRING).then(database => {
    console.log('connected to the DB')
    app.set('db', database)
    }
)
.catch(error => console.log( 'massive error' ,error));


// === Instructors Controller === \\ 

// app.get('/api/instructors', instructor_controller.get_all);
app.post('/api/instructors', instructor_controller.get_instructor_by_auth0_id);

// === User Controller === \\

app.get('/api/users', user_controller.get_all);
// app.post('/api/users', user_controller.create_user);

// === Instructor Profile Controller === \\

// app.get(`/api/instructor_profile/:id`, user_controller.get_profile);
// app.post(`/api/instructor_profile/`, user_controller.create_user);


app.get('/api/instructor-data', (req, res) => {
    res.json({ instructor: req.session.instructor});
});


// === Auth0 Logout === \\
app.post('/api/logout', (req, res) => {
    req.session.destroy()
    res.send()
});

const port = 4000;
app.listen(port, () => console.log(`listening on port ${port}`));
