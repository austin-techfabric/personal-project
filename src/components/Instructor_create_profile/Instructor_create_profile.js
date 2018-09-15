import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { logIn, logOut, submitHandler } from '../../redux/reducer';


class Instructor_create_profile extends Component {
    constructor() {
        super();
        this.state = {
          
            age: 0,
            gender:'',
            price: 0,
            imgUrl: '',
            about: '',
            yearsTeaching: 0,
            acoustic: false,
            electric: false,
            latitude: '',
            longitude: '',

        }
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
    
    
    componentDidMount () {
      axios.get('/api/instructor-data')
      .then(response => {
        const instructor = response.data.instructor;
        this.props.logIn(instructor); // uses the logIn function from mapDispatchStateToProps
      })
    }
    
    onChange(e) {
      this.setState({[e.target.name]: e.target.value});
    }
    
      render() {
        
        const { instructor, submitHandler } = this.props
        const { age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, latitude, longitude} = this.state
        //Login with Google to test instructors[0]
        console.log(instructor[0]);
        const { id, email, name } = instructor[0]
        return (
          <div>
          {
            instructor
            ?
            <div><h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{id}</h1>
            
            <h1>Rendered</h1>
            <hr/>
            
            <form onSubmit={this.onSubmit}> 
            
           <label>age: </label>
           <input type="text" name="age" value={age || ''} onChange={this.onChange} />

           <label>gender: </label>
          <input type="text" name="gender" value={gender} onChange={this.onChange} />

          <label>price: </label>
          <input type="text" name="price" value={price || ''} onChange={this.onChange} />

          <label>imgUrl: </label>
          <input type="text" name="imgUrl" value={imgUrl} onChange={this.onChange} />

          <label>about: </label>
          <input type="text" name="about" value={about} onChange={this.onChange} />

          <label>yearsTeaching: </label>
          <input type="text" name="yearsTeaching" value={yearsTeaching || ''} onChange={this.onChange} />

          <label>acoustic: </label>
          <input type="text" name="acoustic" value={acoustic} onChange={this.onChange} />

          <label>electric: </label>
          <input type="text" name="electric" value={electric} onChange={this.onChange} />

          <label>latitude: </label>
          <input type="text" name="latitude" value={latitude} onChange={this.onChange} />

          <label>longitude: </label>
          <input type="text" name="longitude" value={longitude} onChange={this.onChange} />

          <button type="submit" onClick={() => submitHandler(id, age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, latitude, longitude)}>Submit</button>
          </form>
          <button onClick={logOut}>Log out</button>
            </div> : 'you need to log in..'
          }
          </div>
        );
  }
}

const mapStateToProps = state => {
  const { instructor, instructor_profile } = state.instructor_reducer;
  return { instructor, instructor_profile }
}

const mapDispatchToProps = {
  logIn,
  logOut,
  submitHandler
};

export default connect(mapStateToProps, mapDispatchToProps)(Instructor_create_profile)
