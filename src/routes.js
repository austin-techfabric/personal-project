import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Instructor_sign_up from './components/Instructor_sign_up/Instructor_sign_up';
import User_sign_up from './components/User_sign_up/User_sign_up';
import Instructor_create_profile from './components/Instructor_create_profile/Instructor_create_profile';

export default (
    <Switch>
    <Route path="/user_sign_up" exact component={User_sign_up} />
    <Route path="/instructor_sign_up" component={Instructor_sign_up} />
    <Route path="/instructor_create_profile" component={Instructor_create_profile} />
    </Switch>
)