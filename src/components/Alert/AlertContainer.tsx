import React from 'react'
import {Alert} from "./Alert"
import {useSelector} from "react-redux"
import './Alert.css'
import {AppStateType} from "../../redux/reducers"

export const AlertContainer = () => {
    const payload = useSelector((state: AppStateType) => state.alertReducer.payload)
    const payloadElement = payload.map((item, i) =>
        <Alert key={i + 1} {...item}/>).reverse().slice(0,3)
    return (
        <div className='alert'>
            {payloadElement}
        </div>
    )
}