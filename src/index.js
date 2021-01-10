import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from "react-redux"
import store from "./redux/redux-store"
import './App.css'
import {BrowserRouter} from "react-router-dom";

// setTimeout(function () {
//     store.dispatch({
//         type: "SET_BOOKS",
//         payload: [
//             {
//
//                     id: 0,
//                     title: 'Пора пососать'
//
//             }
//         ]
//     })
// }, 1000)

ReactDOM.render(
    <BrowserRouter><Provider store={store}><React.StrictMode>
    <App />
    </React.StrictMode></Provider></BrowserRouter>,
  document.getElementById('root')
);
