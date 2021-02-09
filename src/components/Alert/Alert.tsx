import React, {useEffect} from "react"
import {useDispatch} from "react-redux"
import {hideAlert} from "../../redux/actions/alert"
import './Alert.css'
import {Message} from "semantic-ui-react"
import {AlertType} from "../../Types/types"

export const Alert = (item: AlertType) => {
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(function(){  dispatch(hideAlert(item.payload.id)) }, 1500)
        //eslint-disable-next-line
    }, [])

    return (
        // @ts-ignore
        <div>{item.visible && <Message color={item.payload.color || 'green'} size='large'>
            <strong>{item.payload.text}</strong>
        </Message>}</div>
    )
}
