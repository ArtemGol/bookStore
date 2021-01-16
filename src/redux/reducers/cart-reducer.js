import {ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ONE_PRODUCT} from "../actions/cart";

const initialState = {
    count: 0,
    totalPrice: 0,
    items: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        // case ADD_TO_CART:
        //     return {
        //         ...state,
        //         items: [...state.items, action.payload]
        //     }
        case ADD_TO_CART:
            return {
                ...state,
                count: state.count + 1,
                totalPrice: state.totalPrice + action.payload.price,
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
                totalPrice: state.totalPrice - action.obj.price,
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
                totalPrice: state.totalPrice - action.obj.price,
                items: state.items.filter(item => item.id !== action.obj.id)
            }
        default:
            return state
    }
}

export default cartReducer