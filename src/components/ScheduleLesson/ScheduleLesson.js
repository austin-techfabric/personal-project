import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSchedule, createLesson } from './../../redux/reducer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './sched.scss'

class ScheduleLesson extends Component {
    constructor () {
        super();
        this.state ={ 
            lessonLocation:'Your home',
            instrument:'guitar',
            duration:60,
            month: 'Jan',
            day:'1',
            startTime:'6:00am'

        }
        
    }
    
    
    componentDidMount() {
        this.props.getSchedule(this.props.match.params.id)
    }

    onChange(e) {
        // console.log(e.target.name, e.target.value)
        this.setState({[e.target.name]: e.target.value});
    }

    createLesson = (e, student_id, instrument, lessonLocation, duration, month, day, startTime, instructor_name) => {
        e.preventDefault();
        
        let dateval = 'Lesson with ' + instructor_name + ' on ' + month + ', ' + day + ' at ' + startTime + ' for ' + duration + ' minutes.'
        // console.log('createLesson clicked', 'instrument:', instrument, 'lessonLocation:', lessonLocation, 'duration:', duration, 'dateval:', dateval, 'name', instructor_name, month, day, startTime,)
        axios.post(`/api/create_lesson/${this.props.match.params.id}`, {student_id, lessonLocation, instrument, duration, dateval})
        .then(response => {
            // console.log('createLesson response.data ======>', response.data)
            this.props.history.push(`/dashboard/${student_id}`)
        })
        .catch(error => console.log('createLesson frontend ==== ', error))
    }

    render() {
        // console.log('schedule', this.props.schedule)
        const data = this.props.instructor.length > 0 ? this.props.instructor[0]: {}
        const newSchedule = this.props.schedule.length > 0 ? this.props.schedule[0]: {}
        // console.log('data' , data)
        let desUser = this.props.user.length ? this.props.user[0]: {}
        let {sunstart, sunend, monstart, monend, tuestart, tueend, wedstart, wedend, thurstart, thurend, fristart, friend, satstart, satend} = newSchedule
        let {instrument, lessonLocation, duration} = this.state
        return (
            <div className='sched-parent'>
                <div>
                <div className='moveOutTheWay'>
            <Link  to="/display_instructors"><button>Back</button></Link>
            </div>
                    <img src={data.picture_url} alt='go home' />
                    <div className='blueBox'><h1>Your Request to {data.name}</h1></div>
                    <form onSubmit={(e) => {this.createLesson(e, desUser.id, instrument, lessonLocation, duration, this.state.month, this.state.day, this.state.startTime, data.name)}}>
                    <div>
                    <label>Instrument: </label>
                    <select name='instrument' onChange={(e) => this.onChange(e)}>
                        <option value='guitar'>guitar</option>
                        <option value='bass'>bass</option>
                        <option value='ukulele'>ukulele</option>
                    </select>
                    </div>
                    <div>
                    <label>Select a Lesson Location:</label>
                    <select name='lessonLocation' onChange={(e) => this.onChange(e)}>
                        <option value='Your home'>Your home</option>
                        <option value={`${data.zipcode + ' ' + data.address + ' ' + data.city + ' ' + data.state + ' ' + data.country}`}>Teacher's {data.locationtype} ({data.address})</option>
                    </select>
                    </div>
                    <div>
                    <label>Lesson Options: </label>
                    <select name='duration' onChange={(e) => this.onChange(e)}>
                        <option value='30'> ${data.price * 0.5} / 30 min</option>
                        <option value='60'> ${data.price} / 60 min </option>
                        <option value='90'> ${data.price * 1.5} / 90 min</option>
                    </select>
                    </div>
                    
                        <div>
                            { sunstart && sunend ?
                            <p className='on'>Sunday: {sunstart} - {sunend}</p> : <p className='off'>Sunday: Unavailable</p>
                            }
                            { monstart && monend ?
                            <p className='on'>Monday: {monstart} - {monend}</p> : <p className='off'>Monday: Unavailable</p>
                            }
                            { tuestart && tueend ?
                            <p className='on'>Tueday: {tuestart} - {tueend}</p> : <p className='off'>Tueday: Unavailable</p>
                            }
                            { wedstart && wedend ?
                            <p className='on'>Wednesday: {wedstart} - {wedend}</p> : <p className='off'>Wednesday: Unavailable</p>
                            }
                            { thurstart && thurend ?
                            <p className='on'>Thurday: {thurstart} - {thurend}</p> : <p className='off'>Thursday: Unavailable</p>
                            }
                            { fristart && friend ?
                            <p className='on'>Friday: {fristart} - {friend}</p> : <p className='off'>Friday: Unavailable</p>
                            }
                            { satstart && satend ?
                            <p className='on'>Saturday: {satstart} - {satend}</p> : <p className='off'>Saturday: Unavailable</p>
                            }
                            <label>Requested Date</label>
                            <select name='month' onChange={(e) => this.onChange(e)}>
                                <option value='Jan'>Jan</option>
                                <option value='Feb'>Feb</option>
                                <option value='Mar'>Mar</option>
                                <option value='Apr'>Apr</option>
                                <option value='May'>May</option>
                                <option value='Jun'>Jun</option>
                                <option value='Jul'>Jul</option>
                                <option value='Aug'>Aug</option>
                                <option value='Sep'>Sep</option>
                                <option value='Oct'>Oct</option>
                                <option value='Nov'>Nov</option>
                                <option value='Dec'>Dec</option>
                            </select>
                            <select name='day' onChange={(e) => this.onChange(e)}>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                                <option value='9'>9</option>
                                <option value='10'>10</option>
                                <option value='11'>11</option>
                                <option value='12'>12</option>
                                <option value='13'>13</option>
                                <option value='14'>14</option>
                                <option value='15'>15</option>
                                <option value='16'>16</option>
                                <option value='17'>17</option>
                                <option value='18'>18</option>
                                <option value='19'>19</option>
                                <option value='20'>20</option>
                                <option value='21'>21</option>
                                <option value='22'>22</option>
                                <option value='23'>23</option>
                                <option value='24'>24</option>
                                <option value='25'>25</option>
                                <option value='26'>26</option>
                                <option value='27'>27</option>
                                <option value='28'>28</option>
                                <option value='29'>29</option>
                                <option value='30'>30</option>
                                <option value='31'>31</option>
                            </select>
                            <label>Lesson start time:</label>
                            <select name='startTime' onChange={(e) => this.onChange(e)}>
                                <option value='6:00am'>6:00am</option>
                                <option value='6:30am'>6:30am</option>
                                <option value='7:00am'>7:00am</option>
                                <option value='7:30am'>7:30am</option>
                                <option value='8:00am'>8:00am</option>
                                <option value='8:30am'>8:30am</option>
                                <option value='9:00am'>9:00am</option>
                                <option value='9:30am'>9:30am</option>
                                <option value='10:00am'>10:00am</option>
                                <option value='10:30am'>10:30am</option>
                                <option value='11:00am'>11:00am</option>
                                <option value='11:30am'>11:30am</option>
                                <option value='12:00am'>12:00pm</option>
                                <option value='12:30pm'>12:30pm</option>
                                <option value='1:00am'>1:00pm</option>
                                <option value='1:30pm'>1:30pm</option>
                                <option value='2:00am'>2:00pm</option>
                                <option value='2:30pm'>2:30pm</option>
                                <option value='3:00am'>3:00pm</option>
                                <option value='3:30pm'>3:30pm</option>
                                <option value='4:00am'>4:00pm</option>
                                <option value='4:30pm'>4:30pm</option>
                                <option value='5:00am'>5:00pm</option>
                                <option value='5:30pm'>5:30pm</option>
                                <option value='6:00am'>6:00pm</option>
                                <option value='6:30pm'>6:30pm</option>
                                <option value='7:00am'>7:00pm</option>
                                <option value='7:30pm'>7:30pm</option>
                                <option value='8:00am'>8:00pm</option>
                                <option value='8:30pm'>8:30pm</option>
                                <option value='9:00am'>9:00pm</option>
                                <option value='9:30pm'>9:30pm</option>
                                <option value='10:00am'>10:00pm</option>
                                <option value='10:30pm'>10:30pm</option>
                            </select>
                        </div>
                            <button id='subbutt' type="submit">Submit</button>
                    </form>
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
    createLesson
  };


export default connect(mapStateToProps, mapDispatchToProps)(ScheduleLesson)