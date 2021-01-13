import React from 'react'
import {Container} from "semantic-ui-react"
import Store from "./components/Store/Store"
import AdminPanel from "./components/AdminPanel/AdminPanel"
import Menu from "./components/Menu/Menu"
import {Route, Switch} from "react-router-dom"
import {useSelector} from "react-redux"
import CartContainer from "./components/Card/CartContainer";

const App = () => {
    // const items = useSelector(state => uniqBy(state.cartReducer.items, o => o.id)) удаляет одинаковые id и возвращает 1
    const items = useSelector(state => state.cartReducer.items)
    return (
        <Container>
            <Menu />
            <Switch>
                <Route exact path='/' render={() => <Store/>}/>
                <Route path='/admin' render={() => <AdminPanel/>}/>
                <Route path='/cart' render={() => <CartContainer items={items}/>}/>
                <Route path='*' render={() => <div><b>Error 404 not found</b></div>}/>
            </Switch>
        </Container>
    )
}

export default App;
