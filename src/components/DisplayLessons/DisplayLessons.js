import React, { Component } from 'react'

import './../Dashboard/Dashboard.scss'

export default class DisplayLessons extends Component {
    render() {
        return (
            <div className='singleLesson'>
                <p>{this.props.dateval}</p>
                <p>Location: {this.props.location}</p>
                <p>Instrument {this.props.instrument}</p>
            </div>
        )
    }
}
