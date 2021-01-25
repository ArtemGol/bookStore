import React from 'react'
import {Pagination} from 'semantic-ui-react'
import {useDispatch} from "react-redux"
import {setCurrentPage} from "../../../redux/actions/pagination"

const Paginator = ({totalItemsCount, pageSize, currentPage, query, history}) => {

    const dispatch = useDispatch()
    const pagesCount = Math.ceil(totalItemsCount/pageSize)
    const handlePaginationChange = (e, {activePage}) => {
        dispatch(setCurrentPage(activePage))
        if (!query.has('page') && activePage !== 1) {
            query.append('page', activePage)
            history.push(`?${query.toString()}`)
        } else if (query.has('page') && activePage !== 1) {
            query.set('page', activePage)
            history.push(`?${query.toString()}`)
        } else {
            query.delete('page');
            history.push(`?${query.toString()}`)
        }
    }

    return (
        <Pagination activePage={currentPage} onPageChange={handlePaginationChange} totalPages={pagesCount} />
    )
}

export default Paginator

