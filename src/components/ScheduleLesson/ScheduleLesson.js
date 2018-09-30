import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSchedule, createLesson } from './../../redux/reducer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ScheduleLesson.css'

class ScheduleLesson extends Component {
    constructor () {
        super();
        this.state ={ 
            lessonLocation:'teachers studio',
            instrument:'',
            duration:0,
            dateval:''
        }
        
    }
    
    // create table lessons (
    //     id serial primary key,
    //     student_id integer references users(id),	
    //     instructor_id integer references instructor_profile(id),	
    //     lessonLocation varchar(30),
    //     instrument text,
    //     duration integer,
    //     dateval text
    // );
    
    componentDidMount() {
        this.props.getSchedule(this.props.match.params.id)
    }

    onChange(e) {
        console.log(e.target.name, e.target.value)
        this.setState({[e.target.name]: e.target.value});
    }

    createLesson = (e, student_id, instrument, lessonLocation, duration, dateval) => {
        e.preventDefault();
        
        console.log('createLesson clicked', 'instrument:', instrument, 'lessonLocation:', lessonLocation, 'duration:', duration, 'dateval:', dateval)
        
        axios.post(`/api/create_lesson/${this.props.match.params.id}`, {student_id, lessonLocation, instrument, duration, dateval})
        .then(response => {
            console.log('createLesson response.data ======>', response.data)
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
        let {holidays, sunstart, sunend, monstart, monend, tuestart, tueend, wedstart, wedend, thurstart, thurend, fristart, friend, satstart, satend} = newSchedule
        let {instrument, lessonLocation, duration, dateval} = this.state
        return (
            <div>
                <div>
                    <h1>Your Request to {data.name}</h1>
                    <img src={data.picture_url} />
                    <form onSubmit={(e) => {this.createLesson(e, desUser.id, instrument, lessonLocation, duration, dateval)}}>
                    <label>Instrument</label>
                    <select name='instrument' onChange={(e) => this.onChange(e)}>
                        <option value='guitar'>guitar</option>
                        <option value='bass'>bass</option>
                        <option value='ukulele'>ukulele</option>
                    </select>
                    <label>Select a Lesson Location</label>
                    <select name='lessonLocation' onChange={(e) => this.onChange(e)}>
                        <option value={`${data.zipcode + ' ' + data.address + ' ' + data.city + ' ' + data.state + ' ' + data.country}`}>Teacher's {data.locationtype} ({data.address})</option>
                        <option value='students home'>Your home</option>
                    </select>
                    <label>Lesson Options</label>
                    <select name='duration' onChange={(e) => this.onChange(e)}>
                        <option value='30'> ${data.price * 0.5} / 30 min</option>
                        <option value='60'> ${data.price} / 60 min </option>
                        <option value='90'> ${data.price * 1.5} / 90 min</option>
                    </select>
                    
                        <div>
                            { sunstart && sunend ?
                            <p className='on'>Sunday: {sunstart} - {sunend}</p> : <p className='off'>Sunday</p>
                            }
                            { monstart && monend ?
                            <p className='on'>Monday: {monstart} - {monend}</p> : <p className='off'>Monday</p>
                            }
                            { tuestart && tueend ?
                            <p className='on'>Tueday: {tuestart} - {tueend}</p> : <p className='off'>Tueday</p>
                            }
                            { wedstart && wedend ?
                            <p className='on'>Wednesday: {wedstart} - {wedend}</p> : <p className='off'>Wednesday</p>
                            }
                            { thurstart && thurend ?
                            <p className='on'>Thurday: {thurstart} - {thurend}</p> : <p className='off'>Thursday</p>
                            }
                            { fristart && friend ?
                            <p className='on'>Friday: {fristart} - {friend}</p> : <p className='off'>Friday</p>
                            }
                            { satstart && satend ?
                            <p className='on'>Saturday: {satstart} - {satend}</p> : <p className='off'>Saturday</p>
                            }
                            <label>Request Time & Date</label>
                            <input name='dateval' value={this.state.dateval} onChange={(e) => this.onChange(e)}></input>

                            <button type="submit">Submit</button>
                        </div>
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