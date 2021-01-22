import {sortBy} from "../../utils/Redux-Helper";
import {SET_BOOKS} from "../actions/books";
import {SEARCH_BOOK, SET_FILTER} from "../actions/filter";
import {ADD_NEW_BOOK, DELETE_BOOK} from "../actions/admin";
import {SET_CURRENT_PAGE, SET_TOTAL_BOOKS_COUNT} from "../actions/pagination";

const initialState = {
    isReady: false,
    items: [],
    totalBooksCount: 0,
    pageSize: 4,
    currentPage: 1,
    filterItems: [],
    filterBy: 'All',
    search: ''
}

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_BOOKS:
            return {
                ...state,
                items: action.payload,
                filterItems: action.payload,
                totalBooksCount: action.payload.length,
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
        case SET_TOTAL_BOOKS_COUNT:
            return {
                ...state,
                totalBooksCount: state.items.length
            }
        case ADD_NEW_BOOK:
            return {
                ...state,
                items: [...state.items, action.item],
                filterItems: [...state.filterItems, action.item],
                totalBooksCount: state.totalBooksCount + 1
            }
        case DELETE_BOOK:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.id),
                filterItems: state.filterItems.filter(item => item.id !== action.id),
                totalBooksCount: state.totalBooksCount - 1
            }
        default:
            return state
    }
}

export default booksReducer