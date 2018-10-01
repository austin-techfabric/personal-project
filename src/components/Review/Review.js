import React, { Component } from 'react'
// import axios from 'axios';
// import { connect } from 'react-redux'

import './Review.css';


class Review extends Component {
    constructor () {
        super();
        this.state = {
            toggleValue: false,
            inpTitle: '',
            inpBody: '',
            inpStars: 0,
        }
        this.toggleEdit = this.toggleEdit.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    
    toggleEdit = () => {
        this.setState((prevState) =>{
        //  console.log('prevstate', prevState)
            return {
                toggleValue: !prevState.toggleValue,
            }
         })
     }
 
    onChange(e) {
        console.log(e.target.name, e.target.value)
        this.setState({[e.target.name]: e.target.value});
      }

    render() {
        const {user, poster} = this.props;
        
        // console.log(user)
        // console.log(poster)
        // console.log(req.session.user)
        return (
            <div className='review-wrapper'>
                { !this.state.toggleValue 
                ?
                <div>
                <span className='revdate'>{this.props.date}</span>
                <h1>{this.props.title}</h1>
                {/* <h1>{this.props.poster.name}</h1> */}
                <p>Rating: {this.props.stars}/5</p>
                {/* <p>Content</p> */}
                <p>{this.props.body}</p>
                {  user.id === poster 
                ?
                <div>
                    <button id='lols' onClick={() => this.toggleEdit()}>Edit</button>
                </div>
                : null
                }
                </div>
                : <div className='editRev'>
                    <div>
                    <label >Title</label>
                    <input id='lol' type="text" name="inpTitle" value={this.state.inpTitle} onChange={this.onChange}></input>
                    </div>
                    <dv>
                    <label>Body</label>
                    <input id='lol' type="text" name="inpBody" value={this.state.inpBody} onChange={this.onChange}></input>
                    </dv>
                    <div>
                    <label>Stars</label>
                    <select id='lol' name='inpStars' onChange={this.onChange}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    </div>
                    <div className='buttonDiv'>
                    <button id='butt' onClick={() => {
                        this.props.handleDelete(this.props.id)
                        this.toggleEdit()
                        }}>Delete</button>
                <button id='butt' onClick={() => {
                    this.props.handleEdit(this.state.inpTitle, this.state.inpBody, this.state.inpStars, this.props.id)
                    this.toggleEdit()}}>Submit</button>
                    <button id='butt' onClick={() => this.toggleEdit()}>Cancel</button></div> </div>}
                    
            </div>
        )
    }
}

export default Review

// export default connect()(Review)