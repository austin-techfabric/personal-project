import React, { Component } from 'react'
import myVideo from './vid1.mp4'
import { Link } from 'react-router-dom'; 
import './../../styles/main.scss'

export default class Home extends Component {
    render() {
        return (
            <div>
            <div className='home-wrapper'>
                <header className='v-header head-container'>
                    <div className='fullscreen-video-wrap'>
                        <video src={myVideo} autoPlay={true} loop={true} muted={true}></video>
                    </div>
                    <div className='header-overlay'></div>
                    <div className='header-content'>
                    <span id='phx'>PHX</span><span>FRET</span><span>FINDER</span>
                    <p>stop searching
                         start finding</p>
                    <p id='cta'>Compare expert instructors in your area and find perfect fit to achieve your personal goals as a musician</p>
                    </div>
                </header>
            </div>
                <div className='section2'>
                <h2><Link to='/display_instructors'>Browse local instructors today!</Link>
                </h2>
                </div>
            </div>
        )
    }
}
