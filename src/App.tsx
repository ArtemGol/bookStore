import React from 'react'
import {Container} from "semantic-ui-react"
import {Store} from "./components/Store/Store"
import {Route, Switch, Redirect} from "react-router-dom"
import {CartContainer} from "./components/Card/CartContainer"
import {AlertContainer} from "./components/Alert/AlertContainer"
import {Book} from "./components/Book/Book"
import {Login} from "./components/Login/Login"
import {AdminPanel} from "./components/AdminPanel/AdminPanel"

const App = () => {
    return (
        <div className='container'>
            <Container>
                <AlertContainer/>
                <Switch>
                    <Route path='/store/' render={() => <Store/>}/>
                    <Redirect exact from="/" to="/store" />
                    <Route path='/book/:bookId?' render={() => <Book/>}/>
                    <Route path='/admin' render={() => <AdminPanel/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/cart' render={() => <CartContainer/>}/>
                    <Route path='*' render={() => <div><b>Error 404 not found</b></div>}/>
                </Switch>
            </Container>
        </div>
    )
}

export default App
