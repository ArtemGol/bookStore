import {SEARCH_BOOK, SET_FILTER, SET_SEARCH} from "../reducers/books-reducer";

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter
})

export const searchBook = (search) => ({
    type: SEARCH_BOOK,
    search
})

export const setSearch = (search) => ({
    type: SET_SEARCH,
    search
})