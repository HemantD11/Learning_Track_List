import { combineReducers, legacy_createStore,applyMiddleware } from 'redux'
import {reducer, trackList,Enroll,Courses,courseDetail,isOpen} from './Reducer'
let rootReducer=combineReducers({reducer,trackList,Enroll,Courses,courseDetail,isOpen})
export let store=legacy_createStore(rootReducer)