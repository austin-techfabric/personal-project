import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import LearnOrTeach from './components/LearnOrTeach/LearnOrTeach';
import Instructor_create_profile from './components/Instructor_create_profile/Instructor_create_profile';

export default (
    <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/learn_or_teach" component={LearnOrTeach} />
    <Route path="/instructor_create_profile" component={Instructor_create_profile} />
    </Switch>
)