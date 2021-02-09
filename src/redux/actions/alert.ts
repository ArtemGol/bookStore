import {AlertPayloadType} from "../../Types/types";

export const SHOW_ALERT = 'SHOW_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'

export type showAlertActionType = {
    type: typeof SHOW_ALERT,
    payload: AlertPayloadType
}

export const showAlert = (text: string, color: string, id: number): showAlertActionType => ({
    type: SHOW_ALERT,
    payload: {text, color, id}
})

export type hideAlertActionType = {
    type: typeof HIDE_ALERT,
    id: number
}

export const hideAlert = (id: number): hideAlertActionType => ({
    type: HIDE_ALERT, id
})
