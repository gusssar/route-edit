import { SET_TITLE } from '../actions/PageActions';

export const initialState= {
    value: ['первый', 'второй', 'третий']
};

export function inputReduser(state=initialState, action){
    switch (action.type){
        case SET_TITLE:
            return {...state, year: action.playload}

        default:
            return state
    }
};
