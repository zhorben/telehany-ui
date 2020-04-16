import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import authReducer from '../reducer/auth'

const enhancer = applyMiddleware(thunk, logger)

const store = createStore(
  combineReducers({
    auth: authReducer
  }),
  composeWithDevTools(enhancer)
)

//dev only
// window.store = store

export default store