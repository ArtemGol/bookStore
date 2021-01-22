import React, {useState, useEffect} from 'react'
import {Input, Menu} from 'semantic-ui-react'
import {useDispatch} from "react-redux";
import {searchBook, setFilter} from "../../../redux/actions/filter"
import {setCurrentPage, setTotalItemCount} from "../../../redux/actions/pagination";

const Filter = ({filterBy}) => {

    useEffect(() => {
        dispatch(setFilter('All'))
        //eslint-disable-next-line
    }, [])


    const [localSearch, setLocalSearch] = useState(null)

    const dispatch = useDispatch()
    const bookSearch = async (e) => {
        dispatch(setCurrentPage(1))
        dispatch(searchBook(e.target.value))
        setLocalSearch(e.target.value)
        await dispatch(setTotalItemCount())
    }

    const handleItemClick = (e, {name}) => {
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
                    <Input icon='search' type='search' placeholder='Search...'
                           onChange={bookSearch}/>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )

}

export default Filter