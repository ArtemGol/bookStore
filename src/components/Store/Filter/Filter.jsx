import React, {useState} from 'react'
import {Icon, Input, Menu} from 'semantic-ui-react'
import {useDispatch} from "react-redux";
import {searchBook, setFilter, setSearch} from "../../../redux/actions/filter"

const Filter = ({filterBy, search, books}) => {
    let [changeSearch, setChangeSearch] = useState(null)
    let dispatch = useDispatch()
    const bookSearch = (e) => {
        dispatch(searchBook(e.target.value))
        setChangeSearch(e.target.value)
    }
    const resetSearch = () => {
        dispatch(setSearch(''))
        dispatch(setFilter(filterBy))
        setChangeSearch('')
    }
    const handleEnterSearch = (e) => {
        if (e.key === 'Enter' && books.length > 0) {
            dispatch(setSearch(e.target.value))
            e.target.value = ''
        }
        if (e.key === 'Enter' && books.length === 0) {
            alert('Nothing was found on your request. Please looking for something else')
        }
    }
    const handleItemClick = (e, {name}) => {
        dispatch(setFilter(name))
        changeSearch && dispatch(searchBook(changeSearch))
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
                {search
                    ? <Menu.Item>
                        You are looking for a title or your title contains letter(s):&ensp;
                        <b>{search[0].toUpperCase() + search.slice(1)}</b>
                        &ensp;<Icon onClick={resetSearch} link name='delete' size='large'/>
                    </Menu.Item>
                    : <Menu.Item>
                        <Input icon='search' type='search' placeholder='Search...' onKeyUp={handleEnterSearch}
                               onChange={bookSearch}/>
                    </Menu.Item>
                }
            </Menu.Menu>
        </Menu>
    )

}

export default Filter