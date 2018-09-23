// import React, { Component } from 'react'
// import axios from 'axios';
// import { connect } from 'react-redux';
// import { logIn } from './../../redux/reducer';

// import './Header.css';

// class Header extends Component {
  // constructor() {
  //   super();
  //   this.logOut = this.logOut.bind(this)
  // }
  // logOut = () =>  {
  //       axios.post('/api/logout')
  //       .then()
  //       .catch(err => console.log('error in logOut', err))
  // }

  //     componentDidMount() {
  //               this.props.logIn()
  //       }

  // render() {
  //   const { user } = this.props
  //   return (
  //     <div className="header">
          {/* {
            user
            ?
        <button onClick={this.logOut}>Log out</button>
        : <button onClick={this.login}>Log in</button>   
        } */}
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   const { user, isLoading } = state.instructor_reducer;
//   console.log(user)
//   return { user, isLoading }
// }

// const mapDispatchToProps = {
//   logIn,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Header)
// export default Header
    
    