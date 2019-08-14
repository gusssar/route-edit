export const SET_NAME_DOT='SET_NAME_DOT'
export const ADD_LIST_DOT='ADD_LIST_DOT'

export function setNameDot(nameDot){
    return{
        type: SET_NAME_DOT,
        playload: nameDot
    }
}

export function addListDot(nameDot){
    console.log(nameDot)
    return{
        type: ADD_LIST_DOT,
        playload: nameDot
    }
}