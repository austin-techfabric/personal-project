import { createStore, applyMiddleware, combineReducers } from 'redux'
import reduxPromiseMiddleware from 'redux-promise-middleware'; 
import instructor_reducer from './redux/reducer';

const reducer = combineReducers({
    instructor_reducer
})

const store = createStore(reducer, applyMiddleware(reduxPromiseMiddleware()))


export default store