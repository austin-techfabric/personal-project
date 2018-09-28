import React, { Component } from 'react'
import TimePicker from 'react-time-picker';

export default class InstructorSchedule extends Component {
    constructor () {
        super();
        this.state = {
            holidays: false, 
            sunstart:'12:00',
            sunend:'12:00',
            monstart:'12:00',
            monend:'12:00',
            tuestart:'12:00',
            tueend:'12:00',
            wedstart:'12:00',
            wedend:'12:00',
            thurstart:'12:00',
            thurend:'12:00',
            fristart:'12:00',
            friend:'12:00',
            satstart:'12:00',
            satend:'12:00'
        }
    }
    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({[e.target.name]: e.target.value});
    }

    // onChange = time => this.setState({ time })
    onChange1 = sunstart => this.setState({sunstart})
    onChange2 = sunend => this.setState({sunend})
    onChange3 = monstart => this.setState({monstart})
    onChange4 = monend => this.setState({monend})
    onChange5 = tuestart => this.setState({tuestart})
    onChange6 = tueend => this.setState({tueend})
    onChange7 = wedstart => this.setState({wedstart})
    onChange8 = wedend => this.setState({wedend})
    onChange9 = thurstart => this.setState({thurstart})
    onChange10 = thurend => this.setState({thurend})
    onChange11 = fristart => this.setState({fristart})
    onChange12 = friend => this.setState({friend})
    onChange13 = satstart => this.setState({satstart})
    onChange14 = satend => this.setState({satend})

    render() {

//         var time = "16:30:00"; // your input

// time = time.split(':'); // convert to array

// // fetch
// var hours = Number(time[0]);
// var minutes = Number(time[1]);
// var seconds = Number(time[2]);

// // calculate
// var timeValue;

// if (hours > 0 && hours <= 12) {
//   timeValue= "" + hours;
// } else if (hours > 12) {
//   timeValue= "" + (hours - 12);
// } else if (hours == 0) {
//   timeValue= "12";
// }
 
// timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
// timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
// timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

// // show
// alert(timeValue);
// console.log(timeValue);
            
        console.log(this.state)
        console.log(this.state.time)
        console.log(this.state.sunstart)
        return (
            <div>
                <h1>Create your schedule</h1>
                <br />
                <label>National Holidays:
                <select name='holidays' onChange={this.onChange}>
                <option value={true}>true</option>
                <option value={false}>false</option>
                </select>
                </label>
                <br /><p>Sunday from:</p>
                <TimePicker disableClock={true} value={this.state.sunstart} onChange={this.onChange1} />
                <p>to:</p>
                <TimePicker disableClock={true} value={this.state.sunend} onChange={this.onChange2} />

                <br /><p>Monday from:</p>
                <TimePicker disableClock={true} value={this.state.monstart} onChange={this.onChange3} />
                <p>to:</p>
                <TimePicker disableClock={true} value={this.state.monend} onChange={this.onChange4} />
                <br /><p>Tuesday from:</p>
                <TimePicker disableClock={true} value={this.state.tuestart} onChange={this.onChange5} />
                <p>to:</p>
                <TimePicker disableClock={true} value={this.state.tueend} onChange={this.onChange6} />
                <br /><p>Wednesday from:</p>
                <TimePicker disableClock={true} value={this.state.wedstart} onChange={this.onChange7} />
                <p>to:</p>
                <TimePicker disableClock={true} value={this.state.wedend} onChange={this.onChange8} />
                <br /><p>Thursday from:</p>
                <TimePicker disableClock={true} value={this.state.thurstart} onChange={this.onChange9} />
                <p>to:</p>
                <TimePicker disableClock={true} value={this.state.thurend} onChange={this.onChange10} />
                <br /><p>Friday from:</p>
                <TimePicker disableClock={true} value={this.state.fristart} onChange={this.onChange11} />
                <p>to:</p>
                <TimePicker disableClock={true} value={this.state.friend} onChange={this.onChange12} />
                <br /><p>Saturday from:</p>
                <TimePicker disableClock={true} value={this.state.satstart} onChange={this.onChange13} />
                <p>to:</p>
                <TimePicker disableClock={true} value={this.state.satend} onChange={this.onChange14} />
           
                <button onClick={() => this.morningShift()}>Submit</button>

                
                
            </div>
        )
    }
}
