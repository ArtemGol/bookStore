export const SET_NEW_ITEM = 'SET_NEW_ITEM'
export const ADD_NEW_BOOK = 'ADD_NEW_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'

export const setItem = (obj) => ({
    type: SET_NEW_ITEM,
    payload: obj
})

export const addNewBook = (item) => ({
    type: ADD_NEW_BOOK,
    item
})

export const deleteBook = (id) => ({
    type: DELETE_BOOK,
    id
})

