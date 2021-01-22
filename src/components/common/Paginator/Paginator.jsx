import React from 'react'
import {Pagination} from 'semantic-ui-react'
import {useDispatch} from "react-redux"
import {setCurrentPage} from "../../../redux/actions/pagination"

const Paginator = ({totalItemsCount, pageSize, currentPage}) => {

    const dispatch = useDispatch()
    const pagesCount = Math.ceil(totalItemsCount/pageSize)
    const handlePaginationChange = (e, {activePage}) => {
        dispatch(setCurrentPage(activePage))
    }

    return (
        <Pagination activePage={currentPage} onPageChange={handlePaginationChange} totalPages={pagesCount} />
    )
}

export default Paginator

