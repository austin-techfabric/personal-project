import React, { Component } from 'react'
import { connect } from 'react-redux';
import { submitHandler, setComplete, updateUser } from '../../redux/reducer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './inst.css'

import jump from 'jump.js';


class Instructor_create_profile extends Component {
    constructor() {
        super();
        this.state = {
          age: 18,	
          gender: 'male',     
          locationType:'studio',       
          zipcode: '00000',
          address: 'default',
          city: 'city land',
          state: 'ID',
          country: 'USA',
          price: 60,    
          instruments: '',      
          styles: 'jazz',     
          skillLevel: '',    
          teachingSince: '',    
          about: 'all about me!',    
          education: 'University of Music', 
          month:'',
          year:'',
          guitar: false,
          bass: false,
          ukulele:false,
          
          }
          this.onChange = this.onChange.bind(this)
        }
        handleInst = () => {
          this.setState((prevState, prevProps) => {
            let teachingSince = ''
            teachingSince = this.state.month + this.state.year
            let instruments = ''
            if(this.state.guitar){
                instruments += 'guitar '
            }
            if(this.state.bass){
              instruments += 'bass '
            }
            if(this.state.ukulele){
              instruments += 'ukulele '
            }
            // console.log('instruments',instruments)
            return {
              instruments: instruments, teachingSince
            }
          })
        }
        onSubmit (e) {
        e.preventDefault();      
    }
    
    onChange(e) {
      // console.log(e.target.name, e.target.value)
      this.setState({[e.target.name]: e.target.value});
      
    }
    guitHandler = () => {
      this.setState({guitar: !this.state.guitar})
    }
    bassHandler = () => {
      this.setState({bass: !this.state.bass})
    }
    ukeHandler = () => {
      this.setState({ukulele: !this.state.ukulele})
    }

      render() {
        console.log(' this.props.user --------->', this.props.user)
        console.log(' this.props.instruments --------->', this.state.instruments)
     
        const { user, submitHandler, setComplete } = this.props
        const { age, gender, locationType, zipcode, address, city, state, country, price, instruments, styles, skillLevel, teachingSince, about, education} = this.state
        const data = this.props.user.length > 0 ? this.props.user[0]: {}
        // console.log('data', data)
        const { id } = data
        // console.log('idididididid', id)
        return (
          <div>
          {
            user
            ?
            <div>
            
            <form onSubmit={(e) => this.onSubmit(e)}> 
            <div className='first'>
              <h1>Welcome, {user.name}</h1>
           
              <label>Age: </label>
              <input type="text" name="age" required value={age || ''} onChange={this.onChange} />

              <label>Gender: </label>
              <select name='gender' onChange={this.onChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>


              <label>Location Type: </label>
                <select name='locationType' onChange={this.onChange}>
                  <option value='studio'>Studio</option>
                  <option value='home'>Home</option>
                </select>

          <label htmlFor="zipcode">zipcode: </label>
          <input type="text" name="zipcode" value={zipcode} onChange={this.onChange} />

          <label htmlFor="address">address: </label>
          <input type="text" name="address" value={address} onChange={this.onChange} />
          <label htmlFor="city">city: </label>
          <input type="text" name="city" value={city} onChange={this.onChange} />
          <br />
          <label htmlFor="state">state: </label>
          <select name='state' onChange={this.onChange}>
            <option value='--'>--</option>
            <option value='AL'>AL</option>
            <option value='AK'>AK</option>
            <option value='AZ'>AZ</option>
            <option value='AR'>AR</option>
            <option value='CA'>CA</option>
            <option value='CO'>CO</option>
            <option value='CT'>CT</option>
            <option value='DE'>DE</option>
            <option value='FL'>FL</option>
            <option value='GA'>GA</option>
            <option value='HI'>HI</option>
            <option value='ID'>ID</option>
            <option value='IL'>IL</option>
            <option value='IN'>IN</option>
            <option value='IA'>IA</option>
            <option value='KS'>KS</option>
            <option value='KY'>KY</option>
            <option value='LA'>LA</option>
            <option value='ME'>ME</option>
            <option value='MD'>MD</option>
            <option value='MA'>MA</option>
            <option value='MI'>MI</option>
            <option value='MN'>MN</option>
            <option value='MS'>MS</option>
            <option value='MO'>MO</option>
            <option value='MT'>MT</option>
            <option value='NE'>NE</option>
            <option value='NV'>NV</option>
            <option value='NH'>NH</option>
            <option value='NJ'>NJ</option>
            <option value='NM'>NM</option>
            <option value='NY'>NY</option>
            <option value='NC'>NC</option>
            <option value='ND'>ND</option>
            <option value='OH'>OH</option>
            <option value='OK'>OK</option>
            <option value='OR'>OR</option>
            <option value='PA'>PA</option>
            <option value='RI'>RI</option>
            <option value='SC'>SC</option>
            <option value='SD'>SD</option>
            <option value='TN'>TN</option>
            <option value='TX'>TX</option>
            <option value='UT'>UT</option>
            <option value='VT'>VT</option>
            <option value='VA'>VA</option>
            <option value='WA'>WA</option>
            <option value='WV'>WV</option>
            <option value='WI'>WI</option>
            <option value='WY'>WY</option>
          </select>
          <label htmlFor="country">country: </label>
          <input type="text" name="country" value={country} onChange={this.onChange} />


              <button id="firstButton" onClick={() => jump('.second')}>Next</button>
            </div>
            <div className='second'>
            <h1>Info</h1>
          <label htmlFor="price">price: </label>
          <input type="text" name="price" value={price || ''} onChange={this.onChange} ></input>

          <label htmlFor="instruments">instruments: </label>
          <div className='inst-wrapper'>
            <div className={this.state.guitar ? 'does' : 'doesnt'} onClick={() => this.guitHandler()}>Guitar</div>
            <div className={this.state.bass ? 'does' : 'doesnt'} onClick={() => this.bassHandler()}>Bass</div>
            <div className={this.state.ukulele ? 'does' : 'doesnt'} onClick={() => this.ukeHandler()}>Ukulele</div>
          </div>

          <label htmlFor="styles">Genres: </label>
          <input type="text" name="styles" onChange={this.onChange} />

          <label>Skill Level: </label>
                <select name='skillLevel' onChange={this.onChange}>
                  <option value='beginner'>Beginner</option>
                  <option value='beginner, intermediate'>Intermediate</option>
                  <option value='beginner, intermediate, advanced'>Advanced</option>
                </select>

          <label htmlFor="teachingStyle">Teaching since: </label>
          <select name='month' onChange={this.onChange}>
            <option value='Jan '>Jan</option>
            <option value='Feb '>Feb</option>
            <option value='Mar '>Mar</option>
            <option value='Apr '>Apr</option>
            <option value='May '>May</option>
            <option value='Jun '>Jun</option>
            <option value='Jul '>Jul</option>
            <option value='Aug '>Aug</option>
            <option value='Sep '>Sep</option>
            <option value='Oct '>Oct</option>
            <option value='Nov '>Nov</option>
            <option value='Dec '>Dec</option>
          </select>
          <select name='year' onChange={this.onChange}>
            <option value='1980'>1980</option>
            <option value='1981'>1981</option>
            <option value='1982'>1982</option>
            <option value='1983'>1983</option>
            <option value='1984'>1984</option>
            <option value='1985'>1985</option>
            <option value='1986'>1986</option>
            <option value='1987'>1987</option>
            <option value='1988'>1988</option>
            <option value='1989'>1989</option>
            <option value='1990'>1990</option>
            <option value='1991'>1991</option>
            <option value='1992'>1992</option>
            <option value='1993'>1993</option>
            <option value='1994'>1994</option>
            <option value='1995'>1995</option>
            <option value='1996'>1996</option>
            <option value='1997'>1997</option>
            <option value='1998'>1998</option>
            <option value='1999'>1999</option>
            <option value='2000'>2000</option>
            <option value='2001'>2001</option>
            <option value='2002'>2002</option>
            <option value='2003'>2003</option>
            <option value='2004'>2004</option>
            <option value='2005'>2005</option>
            <option value='2006'>2006</option>
            <option value='2007'>2007</option>
            <option value='2008'>2008</option>
            <option value='2009'>2009</option>
            <option value='2010'>2010</option>
            <option value='2011'>2011</option>
            <option value='2012'>2012</option>
            <option value='2013'>2013</option>
            <option value='2014'>2014</option>
            <option value='2015'>2015</option>
            <option value='2016'>2016</option>
            <option value='2017'>2017</option>
            <option value='2018'>2018</option>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
            <option value='2024'>2024</option>
            <option value='2025'>2025</option>
            <option value='2026'>2026</option>
            <option value='2027'>2027</option>
            <option value='2028'>2028</option>
            <option value='2029'>2029</option>
            <option value='2030'>2030</option>

          </select>

          <label htmlFor="about">About: </label>
          <textarea type="text" name="about" value={about} onChange={this.onChange} />

          <label htmlFor="education">Education: </label>
          <input type="text" name="education" onChange={this.onChange} />

                <button id="secondButton" onClick={() => {
                  this.handleInst()
                  jump('.first')

                }}
                >Back</button>
                <button id="secondButton" onClick={() => {
                  this.handleInst()
                  jump('.third')

                }}
                >Next</button>
            
            
            </div>
            <div className='third'>

                    
                    
                    <h1>Review</h1>
                    <p>Age: {this.state.age}</p>
                    <p>Gender: {this.state.gender}</p>
                    <p>Location Type: {this.state.locationType}</p>
                    <p>Zipcode: {this.state.zipcode}</p>
                    <p>Address: {this.state.address}</p>
                    <p>City: {this.state.city}</p>
                    <p>State: {this.state.state}</p>
                    <p>Country: {this.state.country}</p>
                    <p>Price: ${this.state.price}/hr</p>
                    <p>Instruments: {this.state.guitar ? ' Guitar ' : null}{this.state.bass ? ' Bass ' : null}{this.state.ukulele ? ' Ukulele ' : null}</p>
                    <p>Genres: {this.state.styles}</p>
                    <p>Skill Level: {this.state.skillLevel}</p>
                    <p>Teaching Since: {this.state.teachingSince}</p>
                    <p>About: {this.state.about}</p>
                    <p>Education: {this.state.education}</p>



               <Link to="/instructor_create_schedule"><button type="submit" onClick={() => {
                setComplete(id)
                submitHandler(age, gender, locationType, zipcode, address, city, state, country, price, instruments, styles, skillLevel, teachingSince, about, education, id)
                }}>Submit</button></Link>

            <button id="thirdButton" onClick={() => jump('.second')} >Back</button>
            </div>
 



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
  setComplete,
  updateUser
};


export default connect(mapStateToProps, mapDispatchToProps)(Instructor_create_profile)