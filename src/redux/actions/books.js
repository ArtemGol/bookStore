import {booksAPI} from "../../api/api"

export const SET_BOOKS = 'SET_BOOKS'

export const setBooks = (items) => ({
    type: SET_BOOKS,
    payload: items
})

export const getBooks = () => async (dispatch) => {
    let booksData = await booksAPI.getBooks()
    dispatch(setBooks(booksData))
}