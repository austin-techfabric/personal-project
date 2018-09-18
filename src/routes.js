import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Instructor_sign_up from './components/Instructor_sign_up/Instructor_sign_up';
import Dashboard from './components/Dashboard/Dashboard';
import LearnOrTeach from './components/LearnOrTeach/LearnOrTeach';
import Instructor_create_profile from './components/Instructor_create_profile/Instructor_create_profile';

export default (
    <Switch>
    <Route path="/instructor_sign_up" component={Instructor_sign_up} />
    <Route path="/instructor_create_profile" component={Instructor_create_profile} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/learn_or_teach" component={LearnOrTeach} />
    </Switch>
)