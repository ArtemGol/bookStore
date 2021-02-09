import React, {useState, useEffect, FC, ChangeEvent, SyntheticEvent} from 'react'
import {Input, Menu} from 'semantic-ui-react'
import {useDispatch} from "react-redux";
import {searchBook, setFilter} from "../../../redux/actions/filter"
import {setCurrentPage, setTotalItemCount} from "../../../redux/actions/pagination"

type FilterComponentType = {
    filterBy: string
    query: any
    history: any
}

export const Filter: FC<FilterComponentType> = ({filterBy, query, history}) => {

    useEffect(() => {
        dispatch(setFilter('All'))
        dispatch(searchBook(query.get('searchText') || ""))
        dispatch(setTotalItemCount())
        //eslint-disable-next-line
    }, [])


    const [localSearch, setLocalSearch] = useState(null as string | null)


    const dispatch = useDispatch()

    const bookSearch = async (e: ChangeEvent<HTMLInputElement>) => {
        query.delete('page')

        if(!query.has('searchText') && e.target.value) {
            query.append('searchText', e.target.value)
            history.push(`?${query.toString()}`)
        } else if(query.has('searchText') && e.target.value) {
            query.set('searchText', e.target.value)
            history.push(`?${query.toString()}`)
        } else {
            query.delete('searchText')
            history.push(`?${query.toString()}`)
        }

        dispatch(setCurrentPage(1))
        dispatch(searchBook(e.target.value))
        setLocalSearch(e.target.value)
        await dispatch(setTotalItemCount())
    }

    const handleItemClick = (e: SyntheticEvent, {name}: any) => {
        dispatch(setFilter(name))
        localSearch && dispatch(searchBook(localSearch))
    }
    return (
        <Menu secondary>
            <Menu.Item
                name='All'
                active={filterBy === 'All'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='Price High'
                active={filterBy === 'Price High'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='Price Low'
                active={filterBy === 'Price Low'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='Author'
                active={filterBy === 'Author'}
                onClick={handleItemClick}
            />
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' value={query.get('searchText') || ""} type='search' placeholder='Search...'
                           onChange={bookSearch}/>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )

}