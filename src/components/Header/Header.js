import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logIn } from './../../redux/reducer';

import './Header.css';

class Header extends Component {
    login = () => {
        const redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`);
        window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`
      }
      componentDidMount() {
        this.props.logIn()
        }
  render() {
    return (
      <div className="header">
        { !this.props.userLoggedIn ?
        <button onClick={this.login}>Log in</button>  
        : <button>log out</button>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { user, isLoading, userLoggedIn } = state.instructor_reducer;
  console.log(user)
  return { user, isLoading, userLoggedIn }
}

const mapDispatchToProps = {
  logIn
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

    
    