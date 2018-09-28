import axios from 'axios';

const initialState = {
    user: [],
    instructor: {},
    instructors: [],
    instructor_profile: [],
    isLoading: false,
    reviews: []
}

const SUBMIT_HANDLER = 'SUBMIT_HANDLER';
const SET_INSTRUCTOR = 'SET_INSTRUCTOR';
const SET_COMPLETE = 'SET_COMPLETE';
const GET_INSTRUCTORS = 'GET_INSTRUCTORS';
const GET_REVIEWS = 'GET_REVIEWS';
const GET_SINGLE_INSTRUCTOR = 'GET_SINGLE_INSTRUCTOR';
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const DELETE_REVIEWS = 'DELETE_REVIEWS';
const EDIT_REVIEWS = 'EDIT_REVIEWS';
const CREATE_REVIEW = 'CREATE_REVIEW';

export default function instructor_reducer(state = initialState, action) {

    switch (action.type) {

        case UPDATE_USER_INFO:
        return Object.assign({}, state, action.payload)

        case DELETE_REVIEWS:
        return Object.assign({}, state, action.payload)

        case EDIT_REVIEWS:
        return Object.assign({}, state, action.payload)

        case CREATE_REVIEW:
        return Object.assign({}, state, action.payload)

        case `${GET_INSTRUCTORS}_PENDING`:
            return {...state, isLoading: true}
        case `${GET_INSTRUCTORS}_FULFILLED`:
            return {...state, instructors: action.payload, isLoading: false}

        case `${GET_SINGLE_INSTRUCTOR}_PENDING`:
            return {...state }
        case `${GET_SINGLE_INSTRUCTOR}_FULFILLED`:
            return Object.assign({}, state, {instructor:action.payload})

        case `${GET_REVIEWS}_PENDING`:
            return {...state }
        case `${GET_REVIEWS}_FULFILLED`:
            return Object.assign({}, state, {reviews:action.payload})

        case `${SUBMIT_HANDLER}_PENDING`:
            return {...state, isLoading: true}
        case `${SUBMIT_HANDLER}_FULFILLED`:
            return {...state, instructor_profile:action.payload, isLoading: false}

        case `${SET_INSTRUCTOR}_PENDING`:
            return {...state, isLoading: true}
        case `${SET_INSTRUCTOR}_FULFILLED`:
            return {...state, user: action.payload, isLoading: false}

        case `${SET_COMPLETE}_PENDING`:
            return {...state, isLoading: true}
        case `${SET_COMPLETE}_FULFILLED`:
            return {...state, user: action.payload, isLoading: false}
        default:
            return state; 
    }
} 

export function submitHandler(age, gender, locationType, zipcode, address, city, state, country, price, instruments, styles, skillLevel, teachingSince, about, education, id) {
    console.log(age, gender, locationType, zipcode, address, city, state, country, price, instruments, styles, skillLevel, teachingSince, about, education, id);
    return {
        type: SUBMIT_HANDLER,
        payload: axios.post(`/api/instructor_profile/`, {age, gender, locationType, zipcode, address, city, state, country, price, instruments, styles, skillLevel, teachingSince, about, education, id})
        .then(response => {return response.data})
        .catch(err => console.log('err', err))
    }
}

export function setInstructor(id) {
    return {
        type: SET_INSTRUCTOR,
        payload: axios.put('/api/set_instructor', {id})
        .then((res) => {
            return res.data
        }).catch(err => console.log('err', err))
    }
}
export function setComplete(id) {
    console.log('setComplete fired', id)
    return {
        type: SET_COMPLETE,
        payload: axios.put('/api/set_profile_complete', {id})
        .then((res) => {
            return res.data
        }).catch(err => console.log('err', err))
    }
}

export function getInstructors() {
    // console.log('getInstructors fired!')
    return {
        type: GET_INSTRUCTORS,
        payload: axios.get('/api/instructors')
        .then(response => {
            // console.log('getInstructors response ------->', response.data)
            return response.data
        })
        .catch(err => console.log('err', err))
    }
}
export function updateUser(user){
    return {
        type: UPDATE_USER_INFO,
        payload: {user}
    }
}
export function getSingleInstructor(id) {
    // console.log('getSingleIntructor id -------> ', id)
    return {
        type: GET_SINGLE_INSTRUCTOR,
        payload: axios.get(`/api/instructor_profile/${id}`)
        .then(response => {return response.data})
        .catch(err => console.log('getSingleInstructors error ---->', err))
    }
}

export function getReviews(id) {
    // console.log('getReviews id -------> ', id)
    return {
        type: GET_REVIEWS,
        payload: axios.get(`/api/instructor_reviews/${id}`)
        .then(response => {
            // console.log('getReviews ====>', response.data)
            return response.data
        })
        .catch(err => console.log('getReviews error ---->', err))
    }
}

export function deleteReviews(reviews) {
    return {
        type: DELETE_REVIEWS,
        payload: {reviews}
    }
}
export function editReviews(reviews) {
    return {
        type: EDIT_REVIEWS,
        payload: {reviews}
    }
}
export function createReview(reviews) {
    // console.log('createReview in reducer', reviews)
    return {
        type: EDIT_REVIEWS,
        payload: {reviews}
    }
}



