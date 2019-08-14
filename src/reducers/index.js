import { combineReducers } from 'redux'
import { sideBarReducer } from './sideBar';

export const rootReducer= combineReducers({
    sideBar: sideBarReducer,
})