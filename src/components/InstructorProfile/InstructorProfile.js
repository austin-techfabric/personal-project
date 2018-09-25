import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getReviews, deleteReviews, editReviews, createReview } from './../../redux/reducer';
import axios from 'axios';

import Review from './../Review/Review';

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
            this.setState({toggleValue: !this.state.toggleValue})
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
    createReview = (title, body, stars, poster_id) => {
        console.log('createReview clicked', 'title:',title, 'body:',body, 'stars:',stars, 'poster_id:',poster_id)
        axios.post(`/api/instructor_reviews/${this.props.match.params.id}`, {title, body, stars, poster_id})
        .then(response => {
            console.log('createReview response.data ======>', response.data)
            this.props.createReview(response.data)
        })
        .catch(error => console.log('handleDelete', error))
        
        this.setState({toggleValue: !this.state.toggleValue})
    }





    onChange(e) {
        console.log(e.target.name, e.target.value)
        this.setState({[e.target.name]: e.target.value});
      }


    render() {
        const data = this.props.instructor.length > 0 ? this.props.instructor[0]: {}
        console.log('this.props.reviews', this.props.reviews)
        // console.log('this.props.user', this.props.user)



        // let reviews = this.props.reviews.length > 0 ? this.props.reviews[0]: {}
        const { reviews } = this.props
        const reviewList = reviews

        console.log('data ====]>', data)
        // console.log('data ====]>', data.id)





        const renderReviews = reviewList.map((review, index) => {
            return (
                <Review 
                key={index} 
                title={review.title}
                body={review.body}
                stars={review.stars}
                id={review.id}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                />
            )
        })




        
        return (
            <div>
                <h1>Instructor Profile Rendered</h1>
                <h1>{data.name}</h1>
                <h1>Hourly Rate: ${data.price}</h1>
                <h1>About: {data.about}</h1>
                <div>
                { this.state.toggleValue 
                ? 
                <div>
                    <label>Title</label>
                    <input type="text" name="inpTitle" value={this.state.inpTitle} onChange={this.onChange}></input>
                    <label>Body</label>
                    <input type="text" name="inpBody" value={this.state.inpBody} onChange={this.onChange}></input>
                    <label>Stars</label>
                    <input type="text" name="inpStars" value={this.state.inpStars} onChange={this.onChange}></input>
                    <button onClick={() => this.createReview(this.state.inpTitle, this.state.inpBody, this.state.inpStars, this.props.user.id)}>Submit</button>
                </div>
                : <button onClick={() => this.toggleEdit()}>write a review</button>
                }

                       {renderReviews}                 
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
    createReview
  };


export default connect(mapStateToProps, mapDispatchToProps)(InstructorProfile)