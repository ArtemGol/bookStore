import React, {useState} from 'react'
import {Menu, Popup} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {useSelector} from "react-redux"
import {NavLink} from "react-router-dom";
import CartComponent from "../Card/CartComponent";

const MenuComponent = () => {
    let [state, setState] = useState({activeItem:'store'})
    // const totalPrice = useSelector(state => state.cartReducer.items.reduce((total, book) => total + book.product.price, 0)) сумма объектов массива
    const totalPrice = useSelector(state => state.cartReducer.totalPrice)
    const count = useSelector(state => state.cartReducer.count)
    const items = useSelector(state => state.cartReducer.items)


    const handleItemClick = (e, {name}) => setState({activeItem: name})
    const {activeItem} = state
    return (
        <Menu>
            <NavLink exact to='/'>
                <Menu.Item name='store' onClick={handleItemClick}
                           active={activeItem === 'store'}
                >

                    Books store
                </Menu.Item>
            </NavLink>
            <NavLink to='/admin'>
                <Menu.Item name='admin' onClick={handleItemClick}
                           active={activeItem === 'admin'}
                >
                    Admin panel
                </Menu.Item>
            </NavLink>

            <Menu.Menu position='right'>

                <Menu.Item>
                    Total: &ensp;<b>{totalPrice} rub.</b>
                </Menu.Item>

                <NavLink to='/cart'>

                    <Popup
                        trigger={
                            <Menu.Item name='cart' onClick={handleItemClick}
                                       active={activeItem === 'cart'}
                            >
                                Cart: &ensp;<b>{count}</b>
                            </Menu.Item>
                        }
                        content={items.map(book => <CartComponent {...book.product}/>)}
                        on='click'
                        hideOnScroll/>
                            </NavLink>

            </Menu.Menu>
        </Menu>
    )
}

export default MenuComponent