import axios from 'axios';

const initialState = {
    user: [],
    instructor: {},
    instructors: [],
    instructor_profile: [],
    isLoading: false,

}

// const LOGGED_IN = 'LOGGED_IN';
const SUBMIT_HANDLER = 'SUBMIT_HANDLER';
const SET_INSTRUCTOR = 'SET_INSTRUCTOR';
const SET_COMPLETE = 'SET_COMPLETE';
const GET_INSTRUCTORS = 'GET_INSTRUCTORS';
const GET_SINGLE_INSTRUCTOR = 'GET_SINGLE_INSTRUCTOR';
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

export default function instructor_reducer(state = initialState, action) {
    switch (action.type) {
        // case `${LOGGED_IN}_PENDING`:
        //     return {...state, isLoading: true}
        // case `${LOGGED_IN}_FULFILLED`:
        //     return {...state, user: action.payload, isLoading: false}


        case UPDATE_USER_INFO:
        return Object.assign({}, state, action.payload)

        case `${GET_INSTRUCTORS}_PENDING`:
            return {...state, isLoading: true}
        case `${GET_INSTRUCTORS}_FULFILLED`:
            return {...state, instructors: action.payload, isLoading: false}

        case `${GET_SINGLE_INSTRUCTOR}_PENDING`:
            return {...state, isLoading: true}
        case `${GET_SINGLE_INSTRUCTOR}_FULFILLED`:
            return {...state, instructor: action.payload, isLoading: false}

        case `${SUBMIT_HANDLER}_PENDING`:
            return {...state, isLoading: true}
        case `${SUBMIT_HANDLER}_FULFILLED`:
            return {...state, isLoading: false}

        case `${SET_INSTRUCTOR}_PENDING`:
            return {...state, isLoading: true}
        case `${SET_INSTRUCTOR}_FULFILLED`:
            return {...state, instructor: action.payload, isLoading: false}

        case `${SET_COMPLETE}_PENDING`:
            return {...state, isLoading: true}
        case `${SET_COMPLETE}_FULFILLED`:
            return {...state, instructor: action.payload, isLoading: false}
        default:
            return state; 
    }
} 

export function submitHandler(age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, zipcode, address, city, state, country, id) {
    console.log(age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, zipcode, address, city, state, country, id);
    return {
        type: SUBMIT_HANDLER,
        payload: axios.post(`/api/instructor_profile/`, {age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, zipcode, address, city, state, country, id})
        .then(() => window.location.pathname='/dashboard')
        .catch(err => console.log('err', err))
    }
}

export function setInstructor(id) {
    console.log('setInstructor fired', id)
    return {
        type: SET_INSTRUCTOR,
        payload: axios.put('/api/set_instructor', {id})
        .then((res) => {
            console.log(res.data)
            window.location.pathname='/instructor_create_profile'
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
            // window.location.pathname='/dashboard'
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

    console.log('getSingleIntructor id -------> ', id)
    return {
        type: GET_SINGLE_INSTRUCTOR,
        payload: axios.get(`/api/instructor_profile/${id}`)
        .then(response => console.log('getSingleInstructor ---- reponse.data ----> ', response.data))
        .catch(err => console.log('getSingleInstructors error ---->', err))
    }
}