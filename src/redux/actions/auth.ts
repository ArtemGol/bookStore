import {authAPI} from "../../api/api"
import {ThunkAction} from "redux-thunk"
import {AppStateType} from "../reducers"

export const SET_AUTH_DATA = 'SET_AUTH_DATA'
export const RESET_DATA = 'RESET_DATA'
export const SET_ERROR = 'SET_ERROR'

export type setAuthDataActionType = {
    type: typeof SET_AUTH_DATA,
    payload: string
}

export const setAuthData = (token: string): setAuthDataActionType => ({
    type: SET_AUTH_DATA,
    payload: token
})

export type logoutActionType = {
    type: typeof RESET_DATA
}

export const logout = (): logoutActionType => ({
    type: RESET_DATA
})

export type setErrorActionType = {
    type: typeof SET_ERROR,
    payload: string
}

export const setError = (error: string): setErrorActionType => ({
    type: SET_ERROR,
    payload: error
})

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, setAuthDataActionType>

export const getAuthThunkCreator = (email: string, password: string): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password)
    dispatch(setAuthData(data.token))
    localStorage.setItem('isAuth', JSON.stringify(true))
    localStorage.setItem('token', JSON.stringify(data.token))
}



