import {combineReducers} from "redux"
import booksReducer from './books-reducer'
import cartReducer from "./cart-reducer"
import alertReducer from "./alert-reducer"
import { reducer as formReducer } from "redux-form"
import adminReducer from "./admin-reduser";

export default combineReducers({
    booksReducer,
    cartReducer,
    alertReducer,
    adminReducer,
    form: formReducer
})