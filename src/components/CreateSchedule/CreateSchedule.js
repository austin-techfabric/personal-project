import React, { Component } from 'react'
import { connect } from 'react-redux';
import './CreateSchedule.scss'
import { Link } from 'react-router-dom';
import { createSchedule } from './../../redux/reducer';


class CreateSchedule extends Component {
    constructor () {
        super();
        this.state = {
            holidays: false, 
            sunstart:'9:00am',
            sunend:'5:00pm',
            monstart:'9:00am',
            monend:'5:00pm',
            tuestart:'9:00am',
            tueend:'5:00pm',
            wedstart:'9:00am',
            wedend:'5:00pm',
            thurstart:'9:00am',
            thurend:'5:00pm',
            fristart:'9:00am',
            friend:'5:00pm',
            satstart:'9:00am',
            satend:'5:00pm',
            sunToggle: false,
            monToggle: false,
            tueToggle: false,
            wedToggle: false,
            thuToggle: false,
            friToggle: false,
            satToggle: false,
            doneToggle: false
        }
    }
    onChange = (e) => {this.setState({[e.target.name]: e.target.value})}
    onToggle1 = () => {this.setState((prevState) =>{return {sunToggle: !prevState.sunToggle}})}
    onToggle2 = () => {this.setState((prevState) =>{return {monToggle: !prevState.monToggle}})}
    onToggle3 = () => {this.setState((prevState) =>{return {tueToggle: !prevState.tueToggle}})}
    onToggle4 = () => {this.setState((prevState) =>{return {wedToggle: !prevState.wedToggle}})}
    onToggle5 = () => {this.setState((prevState) =>{return {thuToggle: !prevState.thuToggle}})}
    onToggle6 = () => {this.setState((prevState) =>{return {friToggle: !prevState.friToggle}})}
    onToggle7 = () => {this.setState((prevState) =>{return {satToggle: !prevState.satToggle}})}
    doneHandler = () => {
        this.setState((prevState) =>{
            return {doneToggle: !prevState.doneToggle
        }})}

    prep = () => {
        let nul = ''
        if(!this.state.sunToggle) {
            this.setState({sunstart:nul, sunend:nul})
        }
        if(!this.state.monToggle) {
            this.setState({monstart:nul, monend:nul})
        }
        if(!this.state.tueToggle) {
            this.setState({tuestart:nul, tueend:nul})
        }
        if(!this.state.wedToggle) {
            this.setState({wedstart:nul, wedend:nul})
        }
        if(!this.state.thuToggle) {
            this.setState({thurstart:nul, thurend:nul})
        }
        if(!this.state.friToggle) {
            this.setState({fristart:nul, friend:nul})
        }
        if(!this.state.satToggle) {
            this.setState({satstart:nul, satend:nul})
        }
    }

    onSubmit = (e, holidays, sunstart, sunend, monstart, monend, tuestart, tueend, wedstart, wedend, thurstart, thurend, fristart, friend, satstart, satend, id, createSchedule) => {
        e.preventDefault()
        console.log(holidays, sunstart, sunend, monstart, monend, tuestart, tueend, wedstart, wedend, thurstart, thurend, fristart, friend, satstart, satend, id)
        createSchedule(holidays, sunstart, sunend, monstart, monend, tuestart, tueend, wedstart, wedend, thurstart, thurend, fristart, friend, satstart, satend, id)
    }

    render() {
        const data = this.props.user.length > 0 ? this.props.user[0]: {}
        // console.log('data', data)
        const { id } = data
        // console.log(this.state)
        let {createSchedule} = this.props
        let {holidays, sunstart, sunend, monstart, monend, tuestart, tueend, wedstart, wedend, thurstart, thurend, fristart, friend, satstart, satend, sunToggle, monToggle, tueToggle, wedToggle, thuToggle, friToggle, satToggle} = this.state;
        return (
            <div className='pCreate_Schedule'>
                <h1>You're almost done!</h1>
                <h2>Create your schedule</h2>
                <br />

                <form onSubmit={(e) => this.onSubmit(e, holidays, sunstart, sunend, monstart, monend, tuestart, tueend, wedstart, wedend, thurstart, thurend, fristart, friend, satstart, satend, id, createSchedule)}>
                <label>National Holidays:
                <select name='holidays' onChange={this.onChange}>
                <option value={false}>false</option>
                <option value={true}>true</option>
                </select>
                </label>



                <div className='create-schedule-wrapper'>
                <div  className={sunToggle ? 'enabled' : 'disabled'}>
                    <input type='checkbox' name='sunToggle' value={sunToggle} onClick={this.onToggle1} />
                    <p>Sun</p>
                    <input disabled={sunToggle ? false : true} className='textInput' name='sunstart' value={sunstart} onChange={this.onChange} />
                    <p> to </p>
                    <input disabled={sunToggle ? false : true} className='textInput' name='sunend' value={sunend} onChange={this.onChange} />
                    
                </div>
                <div className={monToggle ? 'enabled' : 'disabled'}>
                    <input type='checkbox'  name='monToggle' value={monToggle} onClick={this.onToggle2}/>
                    <p>Mon</p>
                    <input disabled={monToggle ? false : true} className='textInput' name='monstart' value={monstart} onChange={this.onChange}/>
                    <p>to</p>
                    <input disabled={monToggle ? false : true} className='textInput' name='monend' value={monend} onChange={this.onChange} />
                </div>
                <div className={tueToggle ? 'enabled' : 'disabled'}>
                    <input type='checkbox' name='tueToggle' value={tueToggle} onClick={this.onToggle3} />
                    <p>Tue</p>
                    <input disabled={tueToggle ? false : true} className='textInput' name='tuestart' value={tuestart} onChange={this.onChange} />
                    <p>to</p>
                    <input disabled={tueToggle ? false : true} className='textInput' name='tueend' value={tueend} onChange={this.onChange} />
                </div>
                <div className={wedToggle ? 'enabled' : 'disabled'}>
                    <input type='checkbox' name='wedToggle' value={wedToggle} onClick={this.onToggle4} />
                    <p>Wed</p>
                    <input disabled={wedToggle ? false : true} className='textInput' name='wedstart' value={wedstart} onChange={this.onChange} />
                    <p>to</p>
                    <input disabled={wedToggle ? false : true} className='textInput' name='wedend' value={wedend} onChange={this.onChange} />
                </div>
                <div className={thuToggle ? 'enabled' : 'disabled'}>
                    <input type='checkbox' name='thuToggle' value={thuToggle} onClick={this.onToggle5} />
                    <p>Thu</p>
                    <input disabled={thuToggle ? false : true} className='textInput' name='thurstart' value={thurstart} onChange={this.onChange} />
                    <p>to</p>
                    <input disabled={thuToggle ? false : true} className='textInput' name='thurend' value={thurend} onChange={this.onChange} />
                </div>
                <div className={friToggle ? 'enabled' : 'disabled'}>
                    <input type='checkbox' name='friToggle' value={friToggle} onClick={this.onToggle6} />
                    <p>Fri</p>
                    <input disabled={friToggle ? false : true} className='textInput' name='fristart' value={fristart} onChange={this.onChange} />
                    <p>to</p>
                    <input disabled={friToggle ? false : true} className='textInput' name='friend' value={friend} onChange={this.onChange} />
                </div>
                <div className={satToggle ? 'enabled' : 'disabled'}>
                    <input type='checkbox' name='satToggle' value={satToggle} onClick={this.onToggle7} />
                    <p>Sat</p>
                    <input disabled={satToggle ? false : true} className='textInput' name='satstart' value={satstart} onChange={this.onChange} />
                    <p>to</p>
                    <input disabled={satToggle ? false : true} className='textInput' name='satend' value={satend} onChange={this.onChange} />
                </div>
                </div>
                { this.state.doneToggle ?
                <Link to={`/dashboard/${data.id}`}><button  className='button' type="submit">Submit</button></Link> 
                : <button type='button' onClick={() => {
                    this.doneHandler()
                    this.prep()
                }}>Done</button>
                }
                </form>
                
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { user } = state.instructor_reducer;
    return { user }
  }
  
  const mapDispatchToProps = {
    createSchedule
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(CreateSchedule)