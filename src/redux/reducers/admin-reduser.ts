import {SET_NEW_ITEM, setItemActionType} from "../actions/admin"
import {TypedUseSelectorHook, useSelector} from "react-redux"
import {ItemType} from "../../Types/types"

export type AdminInitialStateType = typeof initialState

const initialState = {
    item: null as ItemType | null
}

const adminReducer = (state = initialState, action: ActionsTypes): AdminInitialStateType => {
    switch (action.type) {
        case SET_NEW_ITEM:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}

type ActionsTypes = setItemActionType

export default adminReducer

export const useAdminSelector: TypedUseSelectorHook<AdminInitialStateType> = useSelector