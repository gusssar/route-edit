import { SET_NAME_DOT } from '../action/InputAction'

const initialState = {
    nameDot: 'из sideBarReducer'
}

export function sideBarReducer(state=initialState, action){
    switch (action.type){
        case SET_NAME_DOT:
            return { ...state, nameDot:action.playload }
    default:
        return state
    }
}