export const SET_FILTER = 'SET_FILTER'
export const SEARCH_BOOK = 'SEARCH_BOOK'

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter
})

export const searchBook = (search) => ({
    type: SEARCH_BOOK,
    search
})
