export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_BOOKS_COUNT = 'SET_TOTAL_BOOKS_COUNT'

export type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}

export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

export type setTotalItemCountActionType = {
    type: typeof SET_TOTAL_BOOKS_COUNT
}

export const setTotalItemCount = (): setTotalItemCountActionType => ({
    type: SET_TOTAL_BOOKS_COUNT
})