import {combineReducers} from "redux"
import booksReducer from './books-reducer'
import cartReducer from "./cart-reducer"
import alertReducer from "./alert-reducer"
import { reducer as formReducer } from "redux-form"
import adminReducer from "./admin-reduser";
import authReducer from "./auth-reduces";

const rootReducer = combineReducers({
    booksReducer,
    cartReducer,
    alertReducer,
    adminReducer,
    authReducer,
    form: formReducer
})

export default rootReducer

export type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>