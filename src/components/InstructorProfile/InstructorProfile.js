import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getReviews, deleteReviews, editReviews, createReview } from './../../redux/reducer';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Review from './../Review/Review';

import './instructor_profile.css'

 class InstructorProfile extends Component {
    constructor () {
        super();
        this.state = {
            toggleValue: false,
            inpTitle: '',
            inpBody: '',
            inpStars: 0,
        }
        this.onChange = this.onChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
    }

    componentDidMount() {
        this.props.getReviews(this.props.match.params.id)
    }
    toggleEdit = () => {
       this.setState((prevState) =>{
        console.log('prevstate', prevState)
           return {
               toggleValue: !prevState.toggleValue,
           }
        })
    }
    handleDelete = (deletedId) => {
        console.log('CLICKED', deletedId)
        axios.delete(`/api/instructor_reviews/${this.props.match.params.id}?deletedId=${deletedId}`)
        .then(response => this.props.deleteReviews(response.data))
        .catch(error => console.log('handleDelete', error))
    }
    handleEdit = (title, body, stars, id) => {
        console.log('CLICKED', id, title, body, stars)
        
        axios.put(`/api/instructor_reviews/${this.props.match.params.id}`, {title, body, stars, id})
        .then(response => {
            console.log('handleEdit response.data ======>', response.data)
            this.props.editReviews(response.data)
        })
        .catch(error => console.log('handleDelete', error))
    }
    handleSubmit = (e) => {this.refs.form.reset()}
    createReview = (title, body, stars, poster_id, e) => {
        e.preventDefault();
        let date = new Date();
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let dateVal = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        
        // console.log('dataString ===]>', dateVal)
        // console.log('createReview clicked', 'title:',title, 'body:',body, 'stars:',stars, 'poster_id:',poster_id)
        
        
        axios.post(`/api/instructor_reviews/${this.props.match.params.id}`, {title, body, stars, poster_id, dateVal})
        .then(response => {
            console.log('createReview response.data ======>', response.data)
            this.toggleEdit()
            this.props.createReview(response.data)
        })
        .catch(error => console.log('handleDelete', error))
        
       
    }
    onChange(e) {
        console.log(e.target.name, e.target.value)
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const data = this.props.instructor.length > 0 ? this.props.instructor[0]: {}
        // console.log('this.props.reviews', this.props.reviews)
        // console.log('this.props.user', this.props.user)


        let desUser = this.props.user.length ? this.props.user[0]: {}
        const { reviews } = this.props
        const reviewList = reviews

        console.log('Instructor Profile pulled from db --->', data)

        const renderReviews = reviewList.map((review, index) => {
            return (
                <Review className='review'
                poster={review.poster_id}
                user={desUser}
                key={index} 
                title={review.title}
                body={review.body}
                stars={review.stars}
                id={review.id}
                date={review.dateval}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                />
            )
        })
        return (
            <div className='instructor-profile-wrapper'>
                <div className='instructor-profile-info'>
                <div className='moveOutTheWay'>
            <Link  to="/display_instructors"><button>Back</button></Link>
            </div>
                <img src={data.picture_url} />
                
                <h1>{data.name}</h1>
                <h2>{data.city}, {data.state}</h2>
                        <Link to={`/create_lesson/${this.props.match.params.id}`}><button>Contact {data.name}</button></Link>
                    <div className="about-instructor">
                        <div className='block-div'>
                        
                            <h1>About</h1>
                            <h2>Teaching Since: <span>{data.teachingsince}</span></h2>
                            <h2>Instrument(s): <span>{data.instruments}</span></h2>
                            <h2>Levels Taught: <span>{data.skilllevel}</span></h2>
                            <h2>Styles: <span>{data.styles}</span></h2>
                            <h2>Education: <span>{data.education}</span></h2>
                            <p>{data.about}</p>
                            <div className='staticInfo'>
                            <h2 className='h2justwork'>Policies</h2>
                            <h2 className='h2justwork'>Hourly rate: <span className='justwork'>${data.price}</span></h2>
                            <h2 className='h2justwork'>Lesson cancellation: <span className='justwork'>24 hours notice required</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='inner-profile-wrapper'>
                <div>
                    { this.props.user ? <div>
                { this.state.toggleValue 
                ? 
                <div className='createReview'>
                    <form onSubmit={this.handleSubmit} ref="form">
                    <h1>Submit a review</h1>
                    <div>
                    <label>Title </label>
                    <input type="text" name="inpTitle" value={this.state.inpTitle} onChange={this.onChange}></input>
                    <label>Stars </label>
                    <select name='inpStars' onChange={this.onChange}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    </div>
                    <div className='specDiv'>
                    <label>Body </label>
                    <textarea type="text" name="inpBody" value={this.state.inpBody} onChange={this.onChange}></textarea>
                    </div>
                    <button type="submit" onClick={(e) => this.createReview(this.state.inpTitle, this.state.inpBody, this.state.inpStars, desUser.id, e)}>Submit</button>
                    <button type="button" onClick={() => this.toggleEdit()}>Cancel</button>
                    </form>
                </div>
                : <button onClick={() => this.toggleEdit()}>write a review</button>
            }</div> : <p id='logInCTA'>Please <span><Link to='/'>log in </Link></span> to leave a review</p>
        }       
        <p id='specyP'>{this.props.reviews.length} Reviews</p>
                {renderReviews} 
                </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = initState => {
    const { instructor, reviews, user } = initState.instructor_reducer;
    return { instructor, reviews, user }
  }
  
  const mapDispatchToProps = {
    getReviews,
    deleteReviews,
    editReviews,
    createReview,
  };


export default connect(mapStateToProps, mapDispatchToProps)(InstructorProfile)