import axios from 'axios';

const initialState = {
    user: [],
    instructor: {},
    instructors: [],
    instructor_profile: [],
    isLoading: false,
    schedule:[],
    reviews: [],
    lessons: []
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
const CREATE_SCHEDULE = 'CREATE_SCHEDULE';
const GET_SCHEDULE = 'GET_SCHEDULE';
const CREATE_LESSON = 'CREATE_LESSON';
const GET_LESSONS = 'GET_LESSONS';

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

        case CREATE_LESSON:
        return Object.assign({}, state, action.payload)

        case `${GET_INSTRUCTORS}_PENDING`:
            return {...state}
        case `${GET_INSTRUCTORS}_FULFILLED`:
            return {...state, instructors: action.payload}

        case `${GET_SINGLE_INSTRUCTOR}_PENDING`:
            return {...state }
        case `${GET_SINGLE_INSTRUCTOR}_FULFILLED`:
            return Object.assign({}, state, {instructor:action.payload})

        case `${GET_REVIEWS}_PENDING`:
            return {...state }
        case `${GET_REVIEWS}_FULFILLED`:
            return Object.assign({}, state, {reviews:action.payload})

        case `${GET_LESSONS}_PENDING`:
            return {...state }
        case `${GET_LESSONS}_FULFILLED`:
            return Object.assign({}, state, {lessons:action.payload})

        case `${GET_SCHEDULE}_PENDING`:
            return {...state }
        case `${GET_SCHEDULE}_FULFILLED`:
            return Object.assign({}, state, {schedule:action.payload})

        case `${SUBMIT_HANDLER}_PENDING`:
            return {...state, isLoading: true}
        case `${SUBMIT_HANDLER}_FULFILLED`:
            return {...state, instructor_profile:action.payload, isLoading: false}

        case `${CREATE_SCHEDULE}_PENDING`:
            return {...state, isLoading: true}
        case `${CREATE_SCHEDULE}_FULFILLED`:
            return {...state, isLoading: true}
        

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
    // console.log('REDUCER ~~~~~~~~~~ age -->', age, 'gender -->', gender, 'locationType -->', locationType, 'zipcode -->', zipcode, 'address -->', address, 'city -->', city, 'state -->', state, 'country -->', country,  'price -->', price, 'instrument -->',  instruments, 'styles -->', styles, 'skilllevel -->', skillLevel, 'teachingSince -->', teachingSince, 'about -->', about, 'education -->', education, 'id -->', id);
    return {
        type: SUBMIT_HANDLER,
        payload: axios.post(`/api/instructor_profile/`, {age, gender, locationType, zipcode, address, city, state, country, price, instruments, styles, skillLevel, teachingSince, about, education, id})
        .then(response => {
            console.log('REDUCER!! response.data', response.data)
            return response.data
        })
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
    // console.log('setComplete fired', id)
    return {
        type: SET_COMPLETE,
        payload: axios.put('/api/set_profile_complete', {id})
        .then((res) => {
            return res.data
        }).catch(err => console.log('err', err))
    }
}
export function getInstructors() {
    console.log('getInstructors fired!')
    return {
        type: GET_INSTRUCTORS,
        payload: axios.get('/api/instructors')
        .then(response => {
            console.log('getInstructors response ------->', response.data)
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
            console.log('Instructor reviews pulled from db ====>', response.data)
            return response.data
        })
        .catch(err => console.log('getReviews error ---->', err))
    }
}
export function getLessons(id) {
    // console.log('getReviews id -------> ', id)
    return {
        type: GET_LESSONS,
        payload: axios.get(`/api/lessons/${id}`)
        .then(response => {
            // console.log('getLessons ====>', response.data)
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
export function createLesson(lessons) {
    // console.log('createReview in reducer', lessons)
    return {
        type: CREATE_LESSON,
        payload: {lessons}
    }
}
export function createSchedule(holidays, sunstart, sunend, monstart, monend, tuestart, tueend, wedstart, wedend, thurstart, thurend, fristart, friend, satstart, satend, instructor_id) {
    // console.log('createSchedule in reducer, arguments', holidays, sunstart, sunend, monstart, monend, tuestart, tueend, wedstart, wedend, thurstart, thurend, fristart, friend, satstart, satend, instructor_id)
    return {
        type: CREATE_SCHEDULE,
        payload: axios.post(`/api/instructor_create_schedule/`, {holidays, sunstart, sunend, monstart, monend, tuestart, tueend, wedstart, wedend, thurstart, thurend, fristart, friend, satstart, satend, instructor_id})
        .then(response => {
            console.log('REDUCER!! response.data', response.data)
            return response.data
        })
        .catch(err => console.log('err', err))
    }
}
export function getSchedule(id) {
    // console.log('getReviews id -------> ', id)
    return {
        type: GET_SCHEDULE,
        payload: axios.get(`/api/instructor_schedule/${id}`)
        .then(response => {
            console.log('Instructor schedule pulled from db --->', response.data)
            return response.data
        })
        .catch(err => console.log('getReviews error ---->', err))
    }
}