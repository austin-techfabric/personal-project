import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSchedule } from './../../redux/reducer';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ScheduleLesson extends Component {
    constructor () {
        super();
        this.state ={ 
            toggleAval: true
        }
        
    }
    
    componentDidMount() {
        this.props.getSchedule(this.props.match.params.id)
    }

    toggleView = () => {
        this.setState({toggleAval: !this.state.toggleAval})
    }

    render() {
        console.log('schedule', this.props.schedule)
        const data = this.props.instructor.length > 0 ? this.props.instructor[0]: {}
        const newSchedule = this.props.schedule.length > 0 ? this.props.schedule[0]: {}
        console.log('data' , data)
        let desUser = this.props.user.length ? this.props.user[0]: {}
        return (
            <div>
                <div>
                    <h1>Your Request to {data.name}</h1>
                    <img src={data.picture_url} />
                    <label>Instrument</label>
                    <select>
                        <option>guitar</option>
                        <option>bass</option>
                        <option>ukulele</option>
                    </select>
                    <label>Select a Lesson Location</label>
                    <select>
                        <option>Teacher's {data.locationtype} ({data.address})</option>
                        <option>Your home</option>
                    </select>
                    
                    <select>
                        <option> ${data.price * 0.5} / 30 min</option>
                        <option> ${data.price} / 60 min </option>
                        <option> ${data.price * 1.4} / 90 min</option>
                    </select>
                    <button>Availability</button>
                    { this.state.toggleAval ?
                        <div>
                            <p>Su</p>
                            <p>Mo</p>
                            <p>Tu</p>
                            <p>We</p>
                            <p>Th</p>
                            <p>Fr</p>
                            <p>Sa</p>
                            <button>View Lesson Options</button>

                        </div>
                        : null
                    }

                </div>
            </div>
        )
    }
}



const mapStateToProps = initState => {
    const { user, instructor, schedule } = initState.instructor_reducer;
    return { user, instructor, schedule }
  }
  
  const mapDispatchToProps = {
    getSchedule,
  };


export default connect(mapStateToProps, mapDispatchToProps)(ScheduleLesson)