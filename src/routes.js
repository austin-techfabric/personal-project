import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import LearnOrTeach from './components/LearnOrTeach/LearnOrTeach';
import Instructor_create_profile from './components/Instructor_create_profile/Instructor_create_profile';
import DisplayInstructors from './components/DisplayInstructors/DisplayInstructors';
import instructorProfile from './components/InstructorProfile/InstructorProfile';
import InstructorSchedule from './components/InstructorSchedule/InstructorSchedule';
import About from './components/About/About';

export default (
    <Switch>
    
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/about" component={About} />
    
    <Route path="/learn_or_teach" component={LearnOrTeach} />
    <Route path="/instructor_schedule" component={InstructorSchedule} />
    <Route path="/instructor_create_profile" component={Instructor_create_profile} />
    <Route path="/display_instructors" component={DisplayInstructors} />
    <Route path="/instructor_profile/:id" component={instructorProfile} />
    </Switch>
)