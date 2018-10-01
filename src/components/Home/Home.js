import React, { Component } from 'react'
import myVideo from './vid1.mp4'
import './../../styles/main.css'

export default class Home extends Component {
    render() {
        return (
            <div className='home-wrapper'>
                <header className='v-header head-container'>
                    <div className='fullscreen-video-wrap'>
                        <video src={myVideo} autoPlay={true} loop={true} muted={true}></video>
                    </div>
                    <div className='header-overlay'></div>
                    <div className='header-content'>
                    <h1>Sup folks?!</h1>
                    <p>Blah bu blah</p>
                    <a href='#'>Sign Up</a>
                    </div>
                </header>
            </div>
        )
    }
}
