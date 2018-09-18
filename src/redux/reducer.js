import axios from 'axios';

const initialState = {
    user: {},
    instructor: {},
    instructors: [],
    instructor_profile: []
}

const LOGGED_IN = 'LOGGED_IN'
const LOGGED_OUT = 'LOGGED_OUT'
const SUBMIT_HANDLER = 'SUBMIT_HANDLER'

export default function instructor_reducer(state = initialState, action) {
    switch (action.type) {
        case LOGGED_IN:
            return {...state, user: action.payload}
        case LOGGED_OUT:
            return {...state, user: null}
        case SUBMIT_HANDLER:
            return {...state, instructor_profile: action.payload}
        default:
            return state; 
    }
} 

export function logIn(user) {
    return {
        type: LOGGED_IN,
        payload: user
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