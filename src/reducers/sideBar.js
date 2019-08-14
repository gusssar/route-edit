import { 
    SET_NAME_DOT,
    ADD_LIST_DOT
} from '../action/InputAction'

const initialState = {
    nameDot: 'из sideBarReducer',
    nameDotList: [],
}

export function sideBarReducer(state=initialState, action){
    switch (action.type){
        case SET_NAME_DOT:
            return { ...state, nameDot:action.playload }
        case ADD_LIST_DOT:
            return {...state, nameDotList:action.playload }
        default:
            return state
    }
}