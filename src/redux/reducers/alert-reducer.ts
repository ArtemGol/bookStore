import {HIDE_ALERT, hideAlertActionType, SHOW_ALERT, showAlertActionType} from "../actions/alert"
import {AlertType} from "../../Types/types"
import {TypedUseSelectorHook, useSelector} from "react-redux"

export type AlertInitialStateType = typeof initialState

const initialState = {
    payload: [] as Array<AlertType>
}

const alertReducer = (state = initialState, action: ActionsTypes): AlertInitialStateType => {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                payload: [...state.payload, {visible: true, payload: action.payload}]
            }
        case HIDE_ALERT:
            return {
                ...state,
                payload: state.payload.slice(1).map(item => (item.payload.id === action.id)
                    ? {...item, visible: false}
                    : {...item}
                    )
            }
        default:
            return state
    }
}

type ActionsTypes = showAlertActionType | hideAlertActionType

export default alertReducer

export const useAlertSelector: TypedUseSelectorHook<AlertInitialStateType> = useSelector