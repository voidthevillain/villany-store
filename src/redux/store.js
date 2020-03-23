import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

// add middleware to catch and log actions
const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store