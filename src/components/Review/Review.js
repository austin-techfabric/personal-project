import React, { Component } from 'react'
import PropTypes from 'prop-types';
// import axios from 'axios';
// import { connect } from 'react-redux'

import './Review.scss';


export default class Review extends Component {
    constructor () {
        super();
        this.state = {
            toggleValue: false,
            Title: '',
            Body: '',
            Stars: 0,
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
        // console.log(e.target.name, e.target.value)
        this.setState({[e.target.name]: e.target.value});
      }

    render() {
        const {user, poster, body, date, title, stars, id, handleDelete, handleEdit} = this.props
        const {toggleValue, Title, Body, Stars} = this.state
        // const {inpBody}
        
        // console.log(user)
        // console.log(poster)
        // console.log(req.session.user)
        return (
            <div className='review-wrapper'>
                { !toggleValue 
                ?
                <div>
                <span className='revdate'>{date}</span>
                <h1>{title}</h1>
                <p>Rating: {stars}/5</p>
                <p>{body}</p>
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
                    <input id='lol' type="text" name="inpTitle" value={Title} onChange={this.onChange}></input>
                    </div>
                    <div>
                    <label>Body</label>
                    <input id='lol' type="text" name="inpBody" value={Body} onChange={this.onChange}></input>
                    </div>
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
                        handleDelete(id)
                        this.toggleEdit()
                        }}>Delete</button>
                <button id='butt' onClick={() => {
                    handleEdit(Title, Body, Stars, id)
                    this.toggleEdit()}}>Submit</button>
                    <button id='butt' onClick={() => this.toggleEdit()}>Cancel</button></div> </div>}
                    
            </div>
        )
    }
}

// const {user, poster, body, date, title, stars, id, handleDelete, handleEdit} = this.props
Review.propTypes = {
    user: PropTypes.number.isRequired,
    poster: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }