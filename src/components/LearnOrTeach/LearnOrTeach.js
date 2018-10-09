import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInstructor } from '../../redux/reducer'

import './LearnOrTeach.scss'


class LearnOrTeach extends Component {
    constructor () {
        super();
        this.redirectHandler = this.redirectHandler.bind(this)
    }
    redirectHandler = () => {
        this.props.history.push("/instructor_create_profile");
    }
    studentHandler = () => {
        this.props.history.push(`/dashboard/${this.props.user[0].id}`);
    }
    render() {
        const { isLoading, user } = this.props;
        const { setInstructor } = this.props
        return (
            <div>
            <div className='learnOrParent'>
                
                { isLoading ? null
                : <div className='learnOrChild'><h1></h1> 
                <button className='pickTeach' onClick={() => {
                    setInstructor(user[0].id)
                    this.redirectHandler()
                    }}>
                    <p>Sign up as an instructor</p></button>
                <button className='pickLearn' onClick={() => this.studentHandler()}><p>Sign up as a student</p></button> </div>
                }
            </div>
                <div className='greyBox'></div>
            </div>
        )
    }
} 

const mapStateToProps = state => {
    const { user, isLoading , instructor} = state.instructor_reducer;
    return { user, isLoading, instructor }
  }
  
  const mapDispatchToProps = {
    setInstructor,
  };

export default connect(mapStateToProps, mapDispatchToProps)(LearnOrTeach)