export const SHOW_ALERT = 'SHOW_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'

export const showAlert = (text, color, id) => ({
    type: SHOW_ALERT,
    payload: {text, color, id}
})

export const hideAlert = (id) => ({
    type: HIDE_ALERT, id
})
