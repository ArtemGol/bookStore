import React, {useEffect} from "react"
import {useDispatch} from "react-redux"
import {hideAlert} from "../../redux/actions/alert"
import './Alert.css'
import {Message} from "semantic-ui-react"

const Alert = (item) => {
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(function(){  dispatch(hideAlert(item.payload.id)) }, 1500)
    }, [])

    return (
        <div>{item.visible && <Message color={item.payload.color || 'green'} size='large'>
            <strong>{item.payload.text}</strong>
        </Message>}</div>
    )
}

export default Alert
