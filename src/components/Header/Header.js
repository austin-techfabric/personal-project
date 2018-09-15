import React, { Component } from 'react'
import { connect } from 'react-redux';

import './Header.css';

class Header extends Component {
    login = () => {
        const redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`);
        window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`
      }
  render() {
    return (
      <div className="header">
        <button onClick={this.login}>Log in</button>  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return state

    
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

    
    