import React, { Component } from 'react'
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
  render() {
    console.log(this.props.user)
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { user, isLoading } = state.instructor_reducer;
  console.log(user)
  return { user, isLoading }
}


export default connect(mapStateToProps)(Dashboard)