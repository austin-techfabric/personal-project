import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInstructor } from '../../redux/reducer'



class LearnOrTeach extends Component {
    constructor () {
        super();
        this.state = {

        }
        this.redirectHandler = this.redirectHandler.bind(this)
    }
    redirectHandler = () => {
        this.props.history.push("/instructor_create_profile");
    }
    studentHandler = () => {
        this.props.history.push(`/dashboard/${this.props.user[0].id}`);
    }
    render() {
        // console.log(this.props.user[0])
        const { isLoading } = this.props;
        const { setInstructor } = this.props
        // console.log(id)
        return (
            <div>
                
                { isLoading ? null
                : <div><h1>LearnOrTeach</h1> 
                <button onClick={() => {
                    setInstructor(this.props.user[0].id)
                    this.redirectHandler()
                    }}>Sign up as an instructor</button>
                <button onClick={() => this.studentHandler()}>Sign up as a student</button> </div>
                }
                
            </div>
        )
    }
} 

const mapStateToProps = state => {
    const { user, isLoading , instructor} = state.instructor_reducer;
    console.log(user, instructor)
    return { user, isLoading, instructor }
  }
  
  const mapDispatchToProps = {
    setInstructor,
  };

export default connect(mapStateToProps, mapDispatchToProps)(LearnOrTeach)