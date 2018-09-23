import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/reducer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Nav.css'

class Nav extends Component {
    constructor () {
        super();
        this.state = {
            user: ''
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

    logout() {
        axios.post('/api/auth/logout').then(response => {
          window.alert('Successfully logged out')
        }).catch(error => console.log('error',error))
      }

      
    render() {
        const { user } = this.state
        // console.log('/Nav.js ---- this.state.user ------->', this.state.user)
        return (
            <div className='Nav'>
            {user.length ? <Link to='/'><button onClick={()=>this.logout()}> Logout</button></Link> : <button onClick={() => {this.login()}}>Login</button>}
            </div>
        )
    }
}


const mapStateToProps = state => {
  const { user, isLoading } = state.instructor_reducer;
//   console.log(user)
  return { user, isLoading }
}

const mapDispatchToProps = {
  updateUser
}


export default connect( mapStateToProps, mapDispatchToProps)(Nav)