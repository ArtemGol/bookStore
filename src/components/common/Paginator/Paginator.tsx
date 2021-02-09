import React, {FC, SyntheticEvent} from 'react'
import {Pagination} from 'semantic-ui-react'
import {useDispatch} from "react-redux"
import {setCurrentPage} from "../../../redux/actions/pagination"
import styles from './Paginator.module.css'

type PaginatorType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    query: any
    history: any
}

export const Paginator: FC<PaginatorType> = ({totalItemsCount, pageSize, currentPage, query, history}) => {

    const dispatch = useDispatch()
    const pagesCount = Math.ceil(totalItemsCount/pageSize)
    const handlePaginationChange = (e: SyntheticEvent, {activePage}: any) => {
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
        <Pagination className={styles.paginator} activePage={currentPage} onPageChange={handlePaginationChange} totalPages={pagesCount} />
    )
}

