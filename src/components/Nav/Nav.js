import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/reducer';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Nav.scss';

class Nav extends Component {
    constructor () {
        super();
        this.state = {
            user: '',
            active: false
        }
    }
    componentDidMount(){
        axios.get('/api/user-data').then(response => {
            // console.log('Nav.js --- response.data ------>', response.data)
            this.setState({user: response.data})
          this.props.updateUser(response.data)
        }).catch(error => {
          console.log('Axios error GET with componentDidMount on Nav.js', error)
        })
      }

      login = () => {
        const redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`);
        window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`
    }

    toggleClass = () => {
      // console.log(this.state.active)
      const currentState = this.state.active;
      this.setState({ active: !currentState });
    };
    logout() {
        axios.post('/api/auth/logout').then(response => {
          window.alert('Successfully logged out')
           this.setState({
             user: ''
             })
        }).catch(error => console.log('error',error))
      }

      
    render() {
      
        const { user, active } = this.state
        return (
            <div className='Nav'>
        <Link id='logo' to='/'>FRETFINDER</Link>
              <div className='toggle'><i className='fa fa-bars' aria-hidden="true" onClick={this.toggleClass} ></i></div>
              <ul className={active ? 'show': 'ultag'}>
                <li><Link to={`/dashboard/${user.id}`}>Dashboard</Link></li>
                <li><Link to='/display_instructors'>Browse Teachers</Link></li>
            {user ? <li onClick={()=>this.logout()}><Link to='/'>Logout</Link></li> : <li onClick={() => {this.login()}}>Login / Register</li>}
              </ul>
              

            </div>
        )
      }
}


const mapStateToProps = state => {
  const { user, isLoading } = state.instructor_reducer;
  // console.log(user)
  return { user, isLoading }
}

const mapDispatchToProps = {
  updateUser
}


export default connect( mapStateToProps, mapDispatchToProps)(Nav)