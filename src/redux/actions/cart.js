import {ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ONE_PRODUCT} from "../reducers/cart-reducer";

export const addToCart = (obj) => ({
    type: ADD_TO_CART,
    payload: obj
})

export const removeOneProduct = (obj) => ({
    type: REMOVE_ONE_PRODUCT,
    obj
})
export const removeFromCart = (obj) => ({
    type: REMOVE_FROM_CART,
    obj
})