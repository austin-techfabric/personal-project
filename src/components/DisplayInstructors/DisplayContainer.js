import React, { Component } from 'react';
import axios from 'axios';
import { updateUser, getInstructors, getSingleInstructor } from './../../redux/reducer';
import { connect } from 'react-redux';

import DisplayInstructors from './DisplayInstructors';


class DisplayContainer extends Component {
  state = {
    user: [],
    isLoading: false,
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    axios.get('/api/user-data').then(response => {
        // console.log('DisplayInstructors.js --- response.data ------>', response.data)
        this.setState({user: response.data, isLoading: false})
        this.props.updateUser(response.data)
    }).catch(error => {
      console.log('Axios error GET with componentDidMount on DisplayIntructors.js', error)
    })
    this.props.getInstructors()
}

  
  render() {
      const { user, isLoading } = this.state;
      const {getSingleInstructor, instructors} = this.props;
      console.log('instructors', instructors, 'user', user)
    return (
      <div className="gods-1">
      {isLoading || !instructors
        ? <div>Loading...</div>
        : <DisplayInstructors getSingleInstructor={getSingleInstructor} instructors={instructors} user={user}/>
      }
      </div>
    );
  }
}



const mapStateToProps = initState => {
    const { instructors } = initState.instructor_reducer;
    console.log('displayContainer', instructors)
    return { instructors }
  }
  
  const mapDispatchToProps = {
    getInstructors,
    updateUser,
    getSingleInstructor
  };

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer)