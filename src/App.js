import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instructors: [],
      auth0Id:'',
      name:'',
      email:'',
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    console.log(e.target.name, e.target.value)
    this.setState({[e.target.name]: e.target.value});
  }
//   onSubmit (e) {
//     e.preventDefault();
     
//     const post = {
//         title: this.state.title,
//         body: this.state.body,
//     }

//     // axios.post()
// }


  componentDidMount() {
    axios.get('/api/instructors').then(res => this.setState({instructors:res.data}))
  }

  render() {
    const dupeInstructors = [...this.state.instructors];
    const displayInstructors = dupeInstructors.map((element, index) => {
      return ( 
      <div key={index}>
        <h1>auth0Id: {element.auth0Id}</h1>
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

       <form> 
       <label>auth0Id: </label>
      <input type="text" name="auth0Id" value={this.state.auth0Id} onChange={this.onChange} />
      <label>name: </label>
      <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
      <label>email: </label>
      <input type="text" name="email" value={this.state.email} onChange={this.onChange} />
      <button>Submit</button>
      </form>
     </div>
    );
  }
}

export default App;
