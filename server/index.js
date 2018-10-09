const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');
require('dotenv').config();

const app = express();

// =====================================   controllers   ============================================= \\


const schedule_controller = require('./controllers/schedule_controller');
const review_controller = require('./controllers/review_controller');
const display_single_instructor = require('./controllers/display_single_instructor')
const display_instructors = require('./controllers/display_instructors');
const instructor_profile_controller = require('./controllers/instructor_profile_controller');
const lesson_controller = require('./controllers/lesson_controller')


// =====================================   Middlewares    =============================================== \\

app.use(bodyParser.json());
app.use( express.static( `${__dirname}/../build` ) );
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
    maxAge: 1000 * 60 * 60 *  24 * 365
    }
   }));
   app.use(express.static(`${__dirname}/../build`));

// ===============================================    Auth0    ============================================= \\
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
        return db.get_user_by_auth0_id(auth0Id).then(users => {
            if(users.length) {
                console.log('user found');
                const user = users[0];
                req.session.user = user;
                if(users.instructor) {
                    console.log(' instructor = true conditional reached')
                    if(users.profileComplete) {
                        console.log('profileComplete nested if statement fired')
                        res.redirect('/dashboard/');
                    } else {
                        console.log('Instructor create profile reached')
                        res.redirect('/instructor_create_profile'); 
                    }
                } else {
                    res.redirect(`/dashboard/${req.session.user.id}`);
                }
            } else {
                console.log('user not found, creating');
                let {name, email} = response.data;
                console.log(auth0Id, name, email);
                
                return db.create_user([auth0Id, name,  email]).then(newlyCreatedUser => {
                    console.log('newlyCreatedUser', newlyCreatedUser)
                    req.session.user = newlyCreatedUser;
                    res.redirect('/learn_or_teach')
                }).catch(err => {
                    console.log('(create_user) error in create_user', err)
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


// ===================================== Database Connection ==================================== \\

massive(process.env.CONNECTION_STRING).then(database => {
    console.log('connected to the DB')
    app.set('db', database)
    database.reset();
    }).catch(error => console.log( 'massive error' ,error));

// =========================================== END POINTS ======================================= \\

app.get('/api/instructor_profile/:id', display_single_instructor.get_user_by_id);



app.get('/api/instructor_reviews/:id', review_controller.get_reviews);
app.delete('/api/instructor_reviews/:id', review_controller.delete);
app.put('/api/instructor_reviews/:id', review_controller.edit);
app.post('/api/instructor_reviews/:id', review_controller.create);

app.get('/api/instructor_schedule/:id', schedule_controller.get_schedule_by_id)
app.post('/api/instructor_create_schedule', schedule_controller.create)
// app.put('/api/instructor_create_schedule/:id', schedule_controller.update_by_id)

app.post('/api/create_lesson/:id', lesson_controller.create)
app.get('/api/lessons/:id', lesson_controller.get_lesson)
// app.post('')

app.post(`/api/instructor_profile`, instructor_profile_controller.create)

app.get('/api/instructors', display_instructors.get_all_instructors);

app.put(`/api/set_profile_complete`, instructor_profile_controller.set_complete);

app.put('/api/set_instructor', instructor_profile_controller.set_as_instructor);

// app.post('/api/users', user_controller.get_user_by_auth0_id);


// ================================================ Auth0 Login ====================================== \\


app.get('/api/user-data', (req, res) => {
    // console.log(req.session.user)
    res.json(req.session.user);
});

// ================================================= Auth0 Logout ===================================== \\


app.post('/api/auth/logout', (req, res) => {
    req.session.destroy()
    res.send()
});

const path = require('path')
app.get('*', (req, res)=>{
 res.sendFile(path.join(__dirname, '../build/index.html'));
})

const port = 4000;
app.listen(port, () => console.log(`listening on port ${port}`));
