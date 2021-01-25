import React, {useState} from 'react'
import {Menu, Popup} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {useSelector} from "react-redux"
import {NavLink} from "react-router-dom";
import CartComponent from "../Card/CartComponent";

const MenuComponent = () => {
    let [state, setState] = useState('')
    // const totalPrice = useSelector(state => state.cartReducer.items.reduce((total, book) => total + book.product.price, 0)) сумма объектов массива
    const {totalPrice, count, items} = useSelector(state => state.cartReducer)

    const handleItemClick = (e, {name}) => setState(name)
    return (
        <Menu>
            <NavLink to={`/store`}>
                <Menu.Item name='store' onClick={handleItemClick} active={state === 'store'}>
                    Books store
                </Menu.Item>
            </NavLink>
            <NavLink to='/admin'>
                <Menu.Item name='admin' onClick={handleItemClick} active={state === 'admin'}>
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
                                       active={state === 'cart'}
                            >
                                Cart: &ensp;<b>{count}</b>
                            </Menu.Item>
                        }
                        content={items.map(book => <CartComponent key={book.id} {...book.product}/>)}
                        on='click'
                        hideOnScroll/>
                            </NavLink>

            </Menu.Menu>
        </Menu>
    )
}

export default MenuComponent