import axios from 'axios';

const initialState = {
    user: {},
    instructor: {},
    instructors: [],
    instructor_profile: [],
    isLoading: false,
    userLoggedIn: false

}

const LOGGED_IN = 'LOGGED_IN';
const LOGGED_OUT = 'LOGGED_OUT';
const SUBMIT_HANDLER = 'SUBMIT_HANDLER';
const SET_INSTRUCTOR = 'SET_INSTRUCTOR';
const SET_COMPLETE = 'SET_COMPLETE';

export default function instructor_reducer(state = initialState, action) {
    switch (action.type) {
        case `${LOGGED_IN}_PENDING`:
            return {...state, isLoading: true}
        case `${LOGGED_IN}_FULFILLED`:
            return {...state, user: action.payload, isLoading: false, userLoggedIn: true}
        case LOGGED_OUT:
            return {...state, user: null}
        case `${SUBMIT_HANDLER}_PENDING`:
            return {...state, isLoading: true}
        case `${SUBMIT_HANDLER}_FULFILLED`:
            return {...state, instructor_profile: action.payload, isLoading: false}
        case `${SET_INSTRUCTOR}_PENDING`:
            return {...state, isLoading: true}
        case `${SET_INSTRUCTOR}_FULFILLED`:
            return {...state, isLoading: false, }
        case `${SET_COMPLETE}_PENDING`:
            return {...state, isLoading: true, }
        case `${SET_COMPLETE}_FULFILLED`:
            return {...state, isLoading: false, }
        default:
            return state; 
    }
} 

export function logIn() {
    return {
        type: LOGGED_IN,
        payload: axios.get('/api/user-data')
        .then(response => {
            console.log(response.data)
          return response.data
        }).catch(err => console.log('error in login', err))
    }
}
export function logOut() {
    return {
        type: LOGGED_OUT,
        // payload: null,
    }
}
export function submitHandler(age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, latitude, longitude, id) {
    console.log(age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, latitude, longitude, id);
    return {
        type: SUBMIT_HANDLER,
        payload: axios.post(`/api/instructor_profile/`, {age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, latitude, longitude, id}).then(() => window.location.pathname='/dashboard').catch(err => console.log('err', err))
    }
}
export function setInstructor(id) {
    console.log('setInstructor fired', id)
    const trueBool = true;
    return {
        type: SET_INSTRUCTOR,
        payload: axios.put('/api/user-data', {trueBool,id}).then(() => window.location.pathname='/instructor_create_profile').catch(err => console.log('err', err))
    }
}
export function setComplete(id) {
    console.log('setComplete fired', id)
    const trueBool = true;
    return {
        type: SET_COMPLETE,
        payload: axios.post('/api/set_profile_complete', {trueBool,id}).then(() => window.location.pathname='/dashboard').catch(err => console.log('err', err))
    }
}