import React, { Component } from 'react'
import { connect } from 'react-redux';
import { submitHandler, setComplete } from '../../redux/reducer';


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
            zipcode: '',
            address: '',
            city: '',
            state: '',
            country: '',
            ussr: []
          }
          this.onChange = this.onChange.bind(this)
        }
        
        componentDidMount() {
          console.log('fired~!!!!')
         this.setState({ussr: this.props.user})
        }

        onSubmit (e) {
        e.preventDefault();
         
        const profile = { 
            age: this.state.age,
            gender:this.state.gender,
            price: this.state.price,
            imgUrl: this.state.imgUrl,
            about: this.state.about,
            yearsTeaching: this.state.yearsTeaching,
            acoustic: this.state.acoustic,
            electric: this.state.electric,
            zipcode: this.state.zipcode,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
        }  
    }
    
    onChange(e) {
      console.log(e.target.name, e.target.value)
      this.setState({[e.target.name]: e.target.value});
    }
    
      render() {
        
        const { user, submitHandler, setComplete } = this.props
        const { age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, zipcode, address, city, state, country} = this.state
        
        console.log(this.state.ussr); 
        
        const { id, email, name } = user
        console.log(id)
        return (
          <div>
          {
            user
            ?
            <div><h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{id}</h1>
            
            <h1>Rendered</h1>
            <hr/>
            
            <form onSubmit={(e) => this.onSubmit(e)}> 
            
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

          <label>zipcode: </label>
          <input type="text" name="zipcode" value={zipcode} onChange={this.onChange} />

          <label>address: </label>
          <input type="text" name="address" value={address} onChange={this.onChange} />
          <label>city: </label>
          <input type="text" name="city" value={city} onChange={this.onChange} />
          <label>state: </label>
          <input type="text" name="state" value={state} onChange={this.onChange} />
          <label>country: </label>
          <input type="text" name="country" value={country} onChange={this.onChange} />

          <button type="submit" onClick={() => {
            submitHandler(age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, zipcode, address, city, state, country, id)
            setComplete(id)}}>Submit</button>
          </form>
            </div> : 'you need to log in..'
          }
          </div>
        );
  }
}

const mapStateToProps = state => {
  const { user } = state.instructor_reducer;
  return { user }
}

const mapDispatchToProps = {
  submitHandler,
  setComplete
};

export default connect(mapStateToProps, mapDispatchToProps)(Instructor_create_profile)
