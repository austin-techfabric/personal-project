import React, { Component } from 'react'
import axios from 'axios';
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
        this.setState({toggleValue: !this.state.toggleValue})
    }
    onChange(e) {
        console.log(e.target.name, e.target.value)
        this.setState({[e.target.name]: e.target.value});
      }

        // write ternary to check if user id === poster_id and if so render the edit button = 20 min


    render() {
        const {user, poster} = this.props;
        
        console.log(user)
        console.log(poster)
        // console.log(req.session.user)
        return (
            <div className='review-wrapper'>
                { !this.state.toggleValue 
                ?
                <div>
                <h1>Title: {this.props.title}</h1>
                <p>Date: {this.props.date}</p>
                <p>Rating: {this.props.stars}/5</p>
                <p>Content</p>
                <p>{this.props.body}</p>
                {  user.id === poster 
                ?
                <div>
                    <button onClick={() => this.toggleEdit()}>Edit</button>
                </div>
                : null
                }
                </div>
                : <div>
                    <label>Title</label>
                    <input type="text" name="inpTitle" value={this.state.inpTitle} onChange={this.onChange}></input>
                    <label>Body</label>
                    <input type="text" name="inpBody" value={this.state.inpBody} onChange={this.onChange}></input>
                    <label>Stars</label>
                    <input type="text" name="inpStars" value={this.state.inpStars} onChange={this.onChange}></input>
                    <button onClick={() => {
                        this.props.handleDelete(this.props.id)
                        this.toggleEdit()
                        }}>Delete</button>
                <button onClick={() => {
                    this.props.handleEdit(this.state.inpTitle, this.state.inpBody, this.state.inpStars, this.props.id)
                    this.toggleEdit()}}>Submit</button>
                    <button onClick={() => this.toggleEdit()}>Cancel</button></div>}
            </div>
        )
    }
}

export default Review

// export default connect()(Review)