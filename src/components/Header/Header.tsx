import React, {useState, useEffect, SyntheticEvent} from 'react'
import {Menu} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {useDispatch, useSelector} from "react-redux"
import {useHistory, useLocation} from "react-router";
import {logout} from "../../redux/actions/auth";
import {AppStateType} from "../../redux/reducers";

export const Header = () => {
    let [state, setState] = useState('')
    // const totalPrice = useSelector(state => state.cartReducer.items.reduce((total, book) => total + book.product.price, 0)) сумма объектов массива
    const {totalPrice, count} = useSelector((state: AppStateType) => state.cartReducer)
    const {isAuth, token} = useSelector((state: AppStateType) => state.authReducer)
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    useEffect(() => {
        setState(location.pathname.slice(1))
        //eslint-disable-next-line
    }, [])

    const handleItemClick = (e: SyntheticEvent, {name}: any) => {
        setState(name)
        history.push(`${name}`)
    }
    const logOut = () => {
        dispatch(logout())
        localStorage.clear()
    }
    return (
        <Menu>
            <Menu.Item name='store' onClick={handleItemClick} active={state === 'store'}>
                Books store
            </Menu.Item>
            <Menu.Menu position='right'>
                {isAuth
                    ? <Menu.Item onClick={logOut}>
                        Logout
                    </Menu.Item>
                    : <Menu.Item name='login' onClick={handleItemClick} active={state === 'login'}>
                        Login
                    </Menu.Item>
                }
                {token &&
                <Menu.Item>
                    Key:&ensp;<strong>{token}</strong>
                </Menu.Item>
                }
                <Menu.Item>
                    Total: &ensp;<b>{totalPrice} rub.</b>
                </Menu.Item>
                <Menu.Item name='cart' onClick={handleItemClick}
                           active={state === 'cart'}>
                    Cart: &ensp;<b>{count}</b>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}