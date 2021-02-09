import React, {FC} from 'react'
import {LoginReduxForm} from "./LoginForm/LoginForm"
import {useDispatch, useSelector} from "react-redux"
import {Redirect} from "react-router-dom"
import {getAuthThunkCreator} from "../../redux/actions/auth"
import {AppStateType} from "../../redux/reducers"

export type LoginFormValuesType = {
    email: string
    password: string
}

export const Login: FC = () => {
    const dispatch = useDispatch()
    const {isAuth, error} = useSelector((state: AppStateType) => state.authReducer)

    if (isAuth) {
        return <Redirect to={'store'}/>
    }
    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(getAuthThunkCreator(formData.email, formData.password))
    }
    return (
        <LoginReduxForm onSubmit={onSubmit} error={error}/>
    )
}
