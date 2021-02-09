import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'


const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware))
// @ts-ignore
window.store = store
export default store




