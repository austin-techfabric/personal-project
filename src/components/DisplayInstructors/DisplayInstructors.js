import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getInstructors, updateUser, getSingleInstructor } from './../../redux/reducer';

import './display_instructors.css'

class DisplayInstructors extends Component {
    constructor () {
        super();
        this.state = {
            user: [],
        }
        // this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        axios.get('/api/user-data').then(response => {
            // console.log('DisplayInstructors.js --- response.data ------>', response.data)
            this.setState({user: response.data})
            this.props.updateUser(response.data)
        }).catch(error => {
          console.log('Axios error GET with componentDidMount on DisplayIntructors.js', error)
        })
        this.props.getInstructors()
    }


// u.id, 
// u.name, 
// u.email, 
// u.instructor, 
// ip.age, 
// ip.gender, 
// ip.price, 
// ip.imgurl, 
// ip.about, 
// ip.yearsteaching, 
// ip.acoustic, 
// ip.electric, 
// ip.zipcode, 
// ip.address, 
// ip.city, 
// ip.state,  
// ip.country
// from users u
// join instructor_profile ip
// on u.id = ip.instructor_id
// where u.instructor = true
    render() {
        // console.log('this.state.user ====>', this.state.user)
        console.log('Instructors pulled from db --->', this.props.instructors)

        const displayBubbas = this.props.instructors.map((inst, index) => {

            return (
                <div key={index} className='instContainer'>
                <Link to={`/instructor_profile/${inst.id}`}  onClick={() => this.props.getSingleInstructor(inst.id)} >
                <div className='instWrapper'>
                    <div className='imgBox'>
                        <img src={inst.img_url} />
                    </div>
                    <div className='displayInfo'>
                        <h1>{inst.name}</h1>
                        <h2>{inst.city}, {inst.state}</h2>
                        <h3>{inst.instruments}</h3>
                    </div>
                </div>
                    </Link>
                </div>
            )
        })
        return (
            <div className='inst-parent-wrapper'>
                    <h1 className='fit'>Browse Instructors</h1>

                <div >
            {displayBubbas}
                </div>
            </div>
        )
    }
}

const mapStateToProps = initState => {
    const { instructors } = initState.instructor_reducer;
    return { instructors }
  }
  
  const mapDispatchToProps = {
    getInstructors,
    updateUser,
    getSingleInstructor
  };

export default connect(mapStateToProps, mapDispatchToProps)(DisplayInstructors)