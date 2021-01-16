import {sortBy} from "../../utils/Redux-Helper";
import {SET_BOOKS} from "../actions/books";
import {SEARCH_BOOK, SET_FILTER, SET_SEARCH} from "../actions/filter";

const initialState = {
    isReady: false,
    items: null,
    filterItems: null,
    filterBy: 'All',
    search: ''
}

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