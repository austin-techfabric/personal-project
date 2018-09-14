import React, { Component } from 'react'
import axios from 'axios';

export default class Instructor_create_profile extends Component {
    constructor() {
        super();
        this.state = {
          instructors: [],
          age: undefined,
          gender:'',
          price: undefined,
          imgUrl: '',
          about: '',
          yearsTeaching: undefined,
          acoustic: false,
          electric: false,
          latitude: '',
          longitude: '',
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
         
        const profile = { 
            age: null,
            gender:'',
            price: null,
            imgUrl: '',
            about: '',
            yearsTeaching: null,
            acoustic: false,
            electric: false,
            latitude: '',
            longitude: '',
        }
        console.log(profile)
        // axios.post(`/api/instructors`, profile)
    }
    
    
      componentDidMount() {
        axios.get('/api/instructors').then(res => this.setState({instructors:res.data}))
      }
    
      render() {
        // const dupeInstructors = [...this.state.instructors];
        // const displayInstructors = dupeInstructors.map((element, index) => {
        //   return ( 
        //   <div key={index}>
        //     <h1>age: {element.age}</h1>
        //     <h1>gender: {element.gender}</h1>
        //     <h1>price: {element.price}</h1>
        //     <h1>imgUrl: {element.imgUrl}</h1>
        //     <h1>about: {element.about}</h1>
        //     <h1>yearsTeaching: {element.yearsTeaching}</h1>
        //     <h1>acoustic: {element.acoustic}</h1>
        //     <h1>electric: {element.electric}</h1>
        //     <h1>latitude: {element.latitude}</h1>
        //     <h1>longitude: {element.longitude}</h1>
        //   </div>
        //   )
        // })
        // {displayInstructors}
        return (
            <div className="App">
            
            <h1>Rendered</h1>
            <hr/>
    
            <form onSubmit={this.onSubmit}> 

           <label>age: </label>
          <input type="text" name="age" value={this.state.age || ''} onChange={this.onChange} />
           <label>gender: </label>
          <input type="text" name="gender" value={this.state.gender} onChange={this.onChange} />
           <label>price: </label>
          <input type="text" name="price" value={this.state.price || ''} onChange={this.onChange} />
           <label>imgUrl: </label>
          <input type="text" name="imgUrl" value={this.state.imgUrl} onChange={this.onChange} />
           <label>about: </label>
          <input type="text" name="about" value={this.state.about} onChange={this.onChange} />
           <label>yearsTeaching: </label>
          <input type="text" name="yearsTeaching" value={this.state.yearsTeaching || ''} onChange={this.onChange} />
           <label>acoustic: </label>
          <input type="text" name="acoustic" value={this.state.acoustic} onChange={this.onChange} />
           <label>electric: </label>
          <input type="text" name="electric" value={this.state.electric} onChange={this.onChange} />
          <label>latitude: </label>
          <input type="text" name="latitude" value={this.state.latitude} onChange={this.onChange} />
          <label>longitude: </label>
          <input type="text" name="longitude" value={this.state.longitude} onChange={this.onChange} />
          <button type="submit">Submit</button>
          </form>
         </div>
        );
  }
}
