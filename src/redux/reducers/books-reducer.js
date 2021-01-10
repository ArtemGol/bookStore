import {sortBy} from "../../utils/Redux-Helper";

const initialState = {
    isReady: false,
    items: null,
    filterItems: null,
    filterBy: 'All',
    search: ''
}

export const SET_BOOKS = 'SET_BOOKS'
export const SET_IS_READY = 'SET_IS_READY'
export const SET_FILTER = 'SET_FILTER'
export const SEARCH_BOOK = 'SEARCH_BOOK'
export const SET_SEARCH = 'SET_SEARCH'

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                items: action.payload,
                filterItems: action.payload,
                isReady: true
            }
        case SET_FILTER:
            return {
                ...state,
                filterBy: action.payload,
                items: sortBy(state.filterItems, action.payload)
            }
        case SET_IS_READY:
            return {
                ...state,
                isReady: action.payload
            }
        case SEARCH_BOOK:
            return {
                ...state,
                items: sortBy(
                    state.filterItems.filter(u => u.title.toLowerCase().indexOf(action.search.toLowerCase()) > -1 ||
                    u.author.toLowerCase().indexOf(action.search.toLowerCase()) > -1), state.filterBy)
            }
        case SET_SEARCH:
            return {
                ...state,
                search: action.search
            }
        default:
            return state
    }
}

export default booksReducer