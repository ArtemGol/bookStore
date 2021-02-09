import {ItemType} from "../../Types/types";

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const REMOVE_ONE_PRODUCT = 'REMOVE_ONE_PRODUCT'

export type addToCartActionType = {
    type: typeof ADD_TO_CART,
    payload: ItemType
}

export const addToCart = (obj: ItemType): addToCartActionType => ({
    type: ADD_TO_CART,
    payload: obj
})

export type removeOneProductActionType = {
    type: typeof REMOVE_ONE_PRODUCT,
    obj: ItemType
}

export const removeOneProduct = (obj: ItemType): removeOneProductActionType => ({
    type: REMOVE_ONE_PRODUCT,
    obj
})

export type removeFromCartActionType = {
    type: typeof REMOVE_FROM_CART,
    obj: ItemType
}

export const removeFromCart = (obj: ItemType): removeFromCartActionType => ({
    type: REMOVE_FROM_CART,
    obj
})