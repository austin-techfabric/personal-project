import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLessons } from './../../redux/reducer';

import Lessons from './../DisplayLessons/DisplayLessons';

import './Dashboard.scss'

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
    // console.log(this.props.user)
    const desUser = this.props.user.length > 0 ? this.props.user[0]: {}
    const desLessons =  this.props.lessons ? this.props.lessons.length > 0 ? this.props.lessons[0]: {} : null
    // const desInstructors = this.props.instructor.length > 0 ? this.props.instructor[0]: {}
    console.log('Lessons pulled from db --->', desLessons)
    // console.log(desInstructors)
    let displayLessons = this.props.lessons.map((lesson, index) => {
      return (
        <Lessons className="onelessons" key={index} location={lesson.lessonlocation} duration={lesson.duration} instrument={lesson.instrument} dateval={lesson.dateval} />
      )
    })
    return (
      <div className='dashparent'>
        <div className='dashchild'>
        <h1>Your dashboard</h1>
        <Link to="/display_instructors"><button>Browse instructors</button></Link>

        { desUser.instructor && <Link to='/instructor_schedule'><button>Edit Schedule</button></Link>}
        
        <div>{

          <div>{displayLessons}</div>
        }</div>
        </div>
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