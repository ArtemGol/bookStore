import React from 'react'
import Alert from "./Alert"
import {useSelector} from "react-redux"
import './Alert.css'

const AlertContainer = () => {
    const payload = useSelector(state => state.alertReducer.payload)
    const payloadElement = payload.map((item, i) =>
        <Alert key={i} {...item}/>).reverse().slice(0,3)
    return (
        <div className='alert'>
            {payloadElement}
        </div>
    )
}

export default AlertContainer