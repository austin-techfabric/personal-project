import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import LearnOrTeach from './components/LearnOrTeach/LearnOrTeach';
import Instructor_create_profile from './components/Instructor_create_profile/Instructor_create_profile';
import DisplayInstructors from './components/DisplayInstructors/DisplayInstructors';
import instructorProfile from './components/InstructorProfile/InstructorProfile';
import CreateSchedule from './components/CreateSchedule/CreateSchedule';
import About from './components/About/About'; 
import Home from './components/Home/Home'; 
import ScheduleLesson from './components/ScheduleLesson/ScheduleLesson'; 

export default (
    <Switch>
    <Route path="/" exact component={Home} />
    
    <Route path="/dashboard/:id" component={Dashboard} />
    <Route path="/about" component={About} />
    
    <Route path="/create_lesson/:id" component={ScheduleLesson} />
    <Route path="/learn_or_teach" component={LearnOrTeach} />
    <Route path="/instructor_create_schedule" component={CreateSchedule} />
    <Route path="/instructor_create_profile" component={Instructor_create_profile} />
    <Route path="/display_instructors" component={DisplayInstructors} />
    <Route path="/instructor_profile/:id" component={instructorProfile} />
    </Switch>
)