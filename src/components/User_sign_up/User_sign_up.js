import React, { Component } from 'react'
import axios from 'axios';

export default class User_sign_up extends Component {
    constructor() {
        super();
        this.state = {
          users: [],
          auth0id:'',
          name:'',
          email:'',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
      onChange(e) {
        console.log(e.target.name, e.target.value)
        this.setState({[e.target.name]: e.target.value});
      }
      onSubmit (e) {
        e.preventDefault();
         
        const post = {
            auth0id: this.state.auth0id,
            name: this.state.name,
            email: this.state.email
        }
        console.log(post)
        axios.post('/api/users', post)
    }
    
    
      componentDidMount() {
        axios.get('/api/users').then(res => this.setState({users:res.data}))
      }
    
      render() {
        const dupe_users = [...this.state.users];
        const display_users = dupe_users.map((element, index) => {
          return ( 
          <div key={index}>
          <hr />
            <h1>auth0id: {element.auth0id}</h1>
            <h1>name: {element.name}</h1>
            <h1>email: {element.email}</h1>
          </div>
          )
        })
        return (
          <div className="App">
    
            <h1>Rendered</h1>
            {display_users}
            <hr/>
    
           <form onSubmit={this.onSubmit}> 
           <label>auth0id: </label>
          <input type="text" name="auth0id" value={this.state.auth0id} onChange={this.onChange} />
          <label>name: </label>
          <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
          <label>email: </label>
          <input type="text" name="email" value={this.state.email} onChange={this.onChange} />
          <button type="submit">Submit</button>
          </form>
         </div>
        );
  }
}
