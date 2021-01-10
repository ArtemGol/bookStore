import React from 'react'
import {Card, Container} from "semantic-ui-react"
import Store from "./components/Store/Store"
import AdminPanel from "./components/AdminPanel/AdminPanel"
import Menu from "./components/Menu/Menu"
import {Route, Switch, Redirect} from "react-router-dom"
import {useSelector} from "react-redux"
import uniqBy from "lodash/uniqBy"
import CardMainComponent from "./components/Card/Card";

const App = () => {
    // const items = useSelector(state => uniqBy(state.cartReducer.items, o => o.id)) удаляет одинаковые id и возвращает 1
    const items = useSelector(state => state.cartReducer.items)
    return (
        <Container>
            <Route render={() => <Menu/>}/>
            <Switch>

                <Route path='/store' render={() => <Store/>}/>
                <Redirect exact from="/" to="/store"/>
                <Route path='/admin' render={() => <AdminPanel/>}/>
                <Card.Group itemsPerRow={5}>
                    <Route path='/cart' render={() => items.map(book =>
                        <CardMainComponent {...book.product}/>)}/>
                </Card.Group>
                <Route path='*' render={() => <div><b>Error 404 not found</b></div>}/>
            </Switch>

        </Container>
    )
}

export default App;
