import {combineReducers} from "redux"
import booksReducer from './books-reducer'
import cartReducer from "./cart-reducer"
import alertReducer from "./alert-reducer";

export default combineReducers({
    booksReducer,
    cartReducer,
    alertReducer
})