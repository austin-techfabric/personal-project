import React, { Component } from 'react'

export default class DisplayLessons extends Component {
    render() {
        return (
            <div>
                <p>Lesson location: {this.props.location}</p>
                <p>Instrument {this.props.instrument}</p>
                <p>Duration {this.props.duration}</p>
                <p>Date & Time: {this.props.dateval}</p>
            </div>
        )
    }
}
