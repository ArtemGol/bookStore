import {SET_BOOKS} from "../reducers/books-reducer";
import {booksAPI} from "../../api/api";

export const setBooks = (items) => ({
    type: SET_BOOKS,
    payload: items
})

export const getBooks = () => async (dispatch) => {
    let booksData = await booksAPI.getBooks()
    dispatch(setBooks(booksData))
}