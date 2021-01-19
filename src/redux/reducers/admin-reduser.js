import {SET_NEW_ITEM} from "../actions/admin";


const initialState = {
    item: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_ITEM:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}

export default adminReducer