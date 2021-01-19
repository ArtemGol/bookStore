import React, {useState} from "react"
import {Button, Dropdown, Icon, Menu} from "semantic-ui-react"
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux";
import {addNewBook, setItem} from "../../../redux/actions/admin";
import {showAlert} from "../../../redux/actions/alert";

const AdminMenu = (item) => {
    const dispatch = useDispatch()
    const [state, setState] = useState({activeItem: ''})

    const AddBook = () => {
        dispatch(addNewBook(item))
        dispatch(setItem([]))
        dispatch(showAlert('New item was added', 'green', 4))
    }

    const handleItemClick = (e, {name}) => setState({activeItem: name})
    const {activeItem} = state
    return (
        <Menu attached='top'>
            <Dropdown item icon='wrench' simple>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Icon name='dropdown'/>
                        <span className='text'>New item</span>

                        <Dropdown.Menu>
                            <Link to='/admin/'>
                                <Dropdown.Item name='create' onClick={handleItemClick}
                                               active={activeItem === 'create'}>Create</Dropdown.Item>
                            </Link>
                            <Link to='/admin/edit'>
                                <Dropdown.Item name='edit' onClick={handleItemClick}
                                               active={activeItem === 'edit'}>Edit</Dropdown.Item>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown.Item>
                    <Link to='/admin/open'>
                        <Dropdown.Item name='open' onClick={handleItemClick}
                                       active={activeItem === 'open'}>Open</Dropdown.Item>
                    </Link>
                    <Link to='/admin/save'>
                        <Dropdown.Item name='save' onClick={handleItemClick}
                                       active={activeItem === 'save'}>Save...</Dropdown.Item>
                    </Link>
                </Dropdown.Menu>
            </Dropdown>

            <Menu.Menu position='right'>
                {item.title !== undefined
                    ? <Button onClick={AddBook}>
                        Add Item
                    </Button>
                    : <Button disabled>
                    Add Item
                    </Button>
                }
            </Menu.Menu>
        </Menu>
    )
}

export default AdminMenu
