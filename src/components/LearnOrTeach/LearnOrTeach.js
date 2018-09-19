import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInstructor } from '../../redux/reducer'



class LearnOrTeach extends Component {
    render() {
        // console.log(this.props.user[0])
        const { isLoading } = this.props;
        const { setInstructor } = this.props
        // console.log(id)
        return (
            <div>
                
                { isLoading ? null
                : <div><h1>LearnOrTeach</h1> 
                <button onClick={() => setInstructor(this.props.user[0].id)}>Sign up as an instructor</button>
                <button>Sign up as a student</button> </div>
                }
                
            </div>
        )
    }
} 

const mapStateToProps = state => {
    const { user, isLoading } = state.instructor_reducer;
    console.log(user)
    return { user, isLoading }
  }
  
  const mapDispatchToProps = {
    setInstructor,
  };

export default connect(mapStateToProps, mapDispatchToProps)(LearnOrTeach)