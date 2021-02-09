import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    REMOVE_ONE_PRODUCT,
    removeFromCartActionType,
    addToCartActionType,
    removeOneProductActionType
} from "../actions/cart";
import {CartItemType} from "../../Types/types"
import {TypedUseSelectorHook, useSelector} from "react-redux"

export type CartInitialStateType = typeof initialState

const initialState = {
    count: 0,
    totalPrice: 0,
    items: [] as Array<CartItemType>
}

const cartReducer = (state = initialState, action: ActionsTypes): CartInitialStateType => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                count: state.count + 1,
                totalPrice: state.totalPrice + Number(action.payload.price),
                items: state.items.findIndex((item) => item.id === action.payload.id) === -1
                    ? [...state.items,
                        {
                            id: action.payload.id,
                            count: 1,
                            product: action.payload
                        }
                    ]
                    : state.items.map(item => item.id === action.payload.id
                        ? {
                            ...item,
                            count: item.count + 1
                        }
                        : {
                            ...item
                        }
                    )
            }
        case REMOVE_ONE_PRODUCT:
            return {
                ...state,
                count: state.count - 1,
                totalPrice: state.totalPrice - Number(action.obj.price),
                items: state.items.map(item => item.id === action.obj.id && item.count > 1
                    ? {
                        ...item,
                        count: item.count - 1
                    }
                    : {
                        ...item
                    }
                )
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                count: state.count - 1,
                totalPrice: state.totalPrice - Number(action.obj.price),
                items: state.items.filter(item => item.id !== action.obj.id)
            }
        default:
            return state
    }
}

type ActionsTypes = addToCartActionType | removeOneProductActionType | removeFromCartActionType

export default cartReducer

export const useAlertSelector: TypedUseSelectorHook<CartInitialStateType> = useSelector