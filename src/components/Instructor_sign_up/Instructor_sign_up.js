import React, { Component } from 'react'
import axios from 'axios';

export default class Instructor_sign_up extends Component {
    constructor() {
        super();
        this.state = {
          instructors: [],
          auth0_id:'',
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
            auth0_id: this.state.auth0_id,
            name: this.state.name,
            email: this.state.email
        }
        console.log(post)
        axios.post('/api/instructors', post)
    }
    
    
      componentDidMount() {
        axios.get('/api/instructors').then(res => this.setState({instructors:res.data}))
      }
    
      render() {
        const dupeInstructors = [...this.state.instructors];
        const displayInstructors = dupeInstructors.map((element, index) => {
          return ( 
          <div key={index}>
            <h1>auth0Id: {element.auth0_id}</h1>
            <h1>name: {element.name}</h1>
            <h1>email: {element.email}</h1>
          </div>
          )
        })
        return (
          <div className="App">
    
            <h1>Rendered</h1>
            {displayInstructors}
            <hr/>
    
           <form onSubmit={this.onSubmit}> 
           <label>auth0_id: </label>
          <input type="text" name="auth0_id" value={this.state.auth0_id} onChange={this.onChange} />
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
