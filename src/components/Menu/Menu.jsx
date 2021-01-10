import React, {useState} from 'react'
import {Menu, Popup} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {useSelector} from "react-redux"
import {Link} from "react-router-dom";
import CartComponent from "../Card/CartComponent";

const MenuComponent = () => {
    let [state, setState] = useState()
    // const totalPrice = useSelector(state => state.cartReducer.items.reduce((total, book) => total + book.product.price, 0)) сумма объектов массива
    const totalPrice = useSelector(state => state.cartReducer.totalPrice)
    const count = useSelector(state => state.cartReducer.count)
    const items = useSelector(state => state.cartReducer.items)


    const handleItemClick = (e, {name}) => setState({activeItem: name})
    return (
        <Menu>
            <Link to='/store'>
                <Menu.Item name='browse' onClick={handleItemClick}>
                    Books store
                </Menu.Item>
            </Link>
            <Link to='/admin'>
                <Menu.Item name='browse' onClick={handleItemClick}>
                    Admin panel
                </Menu.Item>
            </Link>

            <Menu.Menu position='right'>

                <Menu.Item>
                    Total: &ensp;<b>{totalPrice} rub.</b>
                </Menu.Item>

                <Link to='/cart'>
                    <Popup
                        trigger={
                            <Menu.Item name='help' onClick={handleItemClick}>
                                Cart: &ensp;<b>{count}</b>
                            </Menu.Item>
                        }
                        content={items.map(book => <CartComponent {...book.product}/>)}
                        on='click'
                        hideOnScroll/>
                            </Link>

            </Menu.Menu>
        </Menu>
    )
}

export default MenuComponent