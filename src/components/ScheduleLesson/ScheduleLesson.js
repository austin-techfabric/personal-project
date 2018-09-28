import React, { Component } from 'react'


export default class componentName extends Component {
    constructor () {
        super();
        this.state ={ 
            toggleAval: true
        }
        
    }
    toggleView = () => {
        this.setState({toggleAval: !toggleAval})
    }

    render() {
        return (
            <div>
                {/*  */}
                <div>
                    <h1>{/* this.props.name */}</h1>
                    <h1>{/* instrument (dropdown?) */}</h1>
                    <p>Select a Lesson Location</p>
                    <h1>{/* lesson location (dropdown) in house lesson vs instructor location*/}</h1>
                    <button>Availability</button>
                    <button onClick={this.toggleView}>Pricing</button>
                    { toggleAval ?
                        <div>
                            {/* onClick days, onclick display the times for that day of the week */}
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
