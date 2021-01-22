export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_BOOKS_COUNT = 'SET_TOTAL_BOOKS_COUNT'

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

export const setTotalItemCount = () => ({
    type: SET_TOTAL_BOOKS_COUNT
})