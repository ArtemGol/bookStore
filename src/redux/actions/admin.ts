import {ItemType} from "../../Types/types";

export const SET_NEW_ITEM = 'SET_NEW_ITEM'
export const ADD_NEW_BOOK = 'ADD_NEW_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'
export const EDIT_BOOK = 'EDIT_BOOK'

export type setItemActionType = {
    type: typeof SET_NEW_ITEM,
    payload: ItemType | null
}

export const setItem = (obj: ItemType | null): setItemActionType => ({
    type: SET_NEW_ITEM,
    payload: obj
})

export type addNewBookActionType = {
    type: typeof ADD_NEW_BOOK,
    item: ItemType
}

export const addNewBook = (item: ItemType): addNewBookActionType => ({
    type: ADD_NEW_BOOK,
    item
})

export type editBookActionType = {
    type: typeof EDIT_BOOK,
    item: ItemType
}

export const editBook = (item: ItemType): editBookActionType => ({
    type: EDIT_BOOK,
    item
})

export type deleteBookActionType = {
    type: typeof DELETE_BOOK,
    id: number | string
}

export const deleteBook = (id: number | string): deleteBookActionType => ({
    type: DELETE_BOOK,
    id
})

