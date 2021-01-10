import {combineReducers} from "redux"
import booksReducer from './books-reducer'
import cartReducer from "./cart-reducer"

export default combineReducers({
    booksReducer,
    cartReducer
})