import axios from 'axios';

const initialState = {
    user: {
        auth0_id: '',
        name: '',
        email: ''
    },
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
            return {...state, instructor: action.payload}
        case LOGGED_OUT:
            return {...state, instructor: null}
        case SUBMIT_HANDLER:
            return {...state, instructor_profile: action.payload}
        default:
            return state; 
    }
} 

export function logIn(instructor) {
    return {
        type: LOGGED_IN,
        payload: instructor
    }
}
export function logOut() {

    return {
        type: LOGGED_OUT,
        // payload: null,
    }
}
export function submitHandler(id, age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, latitude, longitude) {
    console.log(id, age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, latitude, longitude);
    return {
        type: SUBMIT_HANDLER,
        payload: axios.post(`/api/instructor_profile`, {id, age, gender, price, imgUrl, about, yearsTeaching, acoustic, electric, latitude, longitude}).then(() => window.location.pathname='/').catch(err => console.log('err', err))
    }
}