import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './DisplayInstructors.css'

import { getInstructors, updateUser, getSingleInstructor } from './../../redux/reducer';

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
        // console.log('this.props.instructors ====>', this.props.instructors)

        const displayBubbas = this.props.instructors.map((inst, index) => {

            return (
                <div key={index} className='instContainer'>
                <Link to={`/instructor_profile/${inst.id}`}  onClick={() => this.props.getSingleInstructor(inst.id)} >
                <div>
                    <h1>{inst.name}</h1>
                    <h3>{inst.age}</h3>
                    <h3>{inst.gender}</h3>
                    <h3>Hourly rate: ${inst.price}</h3>
                    <span>{inst.electric && <p>electric = true</p>}</span>
                    <span>{inst.acoustic && <p>acoustic = true</p>}</span>
                    </div>
                    </Link>
                </div>
            )
        })
        return (
            <div>
                <h1>Display Instructors</h1>
                <form>
                <input type="text" placeholder="Search..."></input>
                <button>Submit</button>
                </form>
                <div>
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