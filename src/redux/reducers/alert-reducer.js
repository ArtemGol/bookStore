import {HIDE_ALERT, SHOW_ALERT} from "../actions/alert";


const initialState = {
    payload: []
}

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                payload: [...state.payload, {visible: true, payload: action.payload}],
                visible: true
            }
        case HIDE_ALERT:
            return {
                ...state,
                payload: state.payload.slice(1).map(item => (item.payload.id === action.id)
                    ? {...item, visible: false, id: state.payload.id}
                    : {...item}
                    )
            }
        default:
            return state
    }
}

export default alertReducer