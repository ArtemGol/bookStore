export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const REMOVE_ONE_PRODUCT = 'REMOVE_ONE_PRODUCT'

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