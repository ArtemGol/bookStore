import {booksAPI} from "../../api/api"
import {ItemType} from "../../Types/types"
import {ThunkAction} from "redux-thunk"
import {AppStateType} from "../reducers"

export const SET_BOOKS = 'SET_BOOKS'

export type setBooksActionType = {
    type: typeof SET_BOOKS,
    payload: Array<ItemType>
}

export const setBooks = (items: Array<ItemType>): setBooksActionType => ({
    type: SET_BOOKS,
    payload: items
})

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, setBooksActionType>

export const getBooks = (): ThunkType => async (dispatch) => {
    let booksData = await booksAPI.getBooks()
    dispatch(setBooks(booksData))
}