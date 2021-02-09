import {
    logoutActionType,
    RESET_DATA,
    SET_AUTH_DATA,
    SET_ERROR,
    setAuthDataActionType,
    setErrorActionType
} from "../actions/auth"
import {TypedUseSelectorHook, useSelector} from "react-redux"

export type AuthInitialStateType = typeof initialState

const initialState = {
    isAuth: localStorage.isAuth || false,
    token: localStorage.token || '',
    error: null as string | null
}

const authReducer = (state = initialState, action: ActionsTypes): AuthInitialStateType => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                isAuth: true,
                token: action.payload,
                error: ''
            }
        case RESET_DATA:
            return {
                ...state,
                isAuth: false,
                token: ''
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

type ActionsTypes = setAuthDataActionType | logoutActionType | setErrorActionType

export default authReducer

export const useAuthSelector: TypedUseSelectorHook<AuthInitialStateType> = useSelector