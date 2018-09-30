import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLessons } from './../../redux/reducer';

import Lessons from './../DisplayLessons/DisplayLessons';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

  componentDidMount() {
    this.props.getLessons(this.props.match.params.id)
  }
  render() {
    console.log(this.props.user)
    const desUser = this.props.user.length > 0 ? this.props.user[0]: {}
    const desLessons = this.props.lessons.length > 0 ? this.props.lessons[0]: {}
    const desInstructors = this.props.instructor.length > 0 ? this.props.instructor[0]: {}
    console.log(desLessons)
    console.log(desInstructors)
    let displayLessons = this.props.lessons.map((lesson, index) => {
      return (
        <Lessons key={index} location={lesson.lessonlocation} duration={lesson.duration} instrument={lesson.instrument} dateval={lesson.dateval} />
      )
    })

    return (
      <div>
        <h1>Dashboard</h1>
        <Link to='/display_instructors'>Find instructors!</Link>
        { desUser.instructor && <Link to='/instructor_schedule'>Edit Schedule</Link>}
        
        
                {/* {displayLessons} */}
        <div>{
            displayLessons.length > 0 ?
          <div>{displayLessons}</div> : <Link to='/display_instructors'>You don't have any lessons scheduled. Click here to browse instructors!</Link>
        }</div>
        

      </div>
    )
  }
}

const mapStateToProps = state => {
  const { user, lessons, instructor } = state.instructor_reducer;
  // console.log(user)
  return { user, lessons, instructor }
}
const mapDispatchToProps = {
  getLessons
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)