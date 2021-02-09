import {sortBy} from "../../utils/Redux-Helper"
import {SET_BOOKS, setBooksActionType} from "../actions/books"
import {
    SEARCH_BOOK,
    SET_FILTER,
    searchBookActionType,
    setFilterActionType
} from "../actions/filter"
import {
    ADD_NEW_BOOK,
    DELETE_BOOK,
    EDIT_BOOK,
    addNewBookActionType,
    deleteBookActionType,
    editBookActionType
} from "../actions/admin"
import {
    SET_CURRENT_PAGE,
    SET_TOTAL_BOOKS_COUNT,
    setCurrentPageActionType,
    setTotalItemCountActionType
} from "../actions/pagination"
import {ItemType} from "../../Types/types"

export type BooksInitialStateType = typeof initialState

const initialState = {
    isReady: false,
    items: [] as Array<ItemType>,
    totalBooksCount: 0,
    pageSize: 4,
    currentPage: 1,
    filterItems: [] as Array<ItemType>,
    filterBy: 'All',
    search: ''
}

const booksReducer = (state = initialState, action: ActionsTypes): BooksInitialStateType => {
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
        case EDIT_BOOK:
            const editItemIndex = state.items.findIndex(item => item.id === action.item.id)
            return {
                ...state,
                items: [...state.items.slice(0, editItemIndex), action.item, ...state.items.slice(editItemIndex + 1, state.items.length)],
                filterItems: [...state.filterItems.slice(0, editItemIndex), action.item, ...state.filterItems.slice(editItemIndex + 1, state.filterItems.length)],
            }
        default:
            return state
    }
}

type ActionsTypes = setCurrentPageActionType | setBooksActionType | setFilterActionType | searchBookActionType |
    setTotalItemCountActionType | addNewBookActionType | deleteBookActionType | editBookActionType

export default booksReducer