export const SET_FILTER = 'SET_FILTER'
export const SEARCH_BOOK = 'SEARCH_BOOK'

export type setFilterActionType = {
    type: typeof SET_FILTER,
    payload: string
}

export const setFilter = (filter: string): setFilterActionType => ({
    type: SET_FILTER,
    payload: filter
})

export type searchBookActionType = {
    type: typeof SEARCH_BOOK,
    search: string
}

export const searchBook = (search: string): searchBookActionType => ({
    type: SEARCH_BOOK,
    search
})
