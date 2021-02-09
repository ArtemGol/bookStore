import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from "react-redux"
import store from "./redux"
import './App.css'
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
