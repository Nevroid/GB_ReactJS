import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import profileReducer from './reducers/profileReducer'
import chatReducer from './reducers/chatReducer'
import usersReducer from './reducers/usersReducer'

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({
  profile: profileReducer,
  chat: chatReducer,
  users: usersReducer
})

export const store = createStore(composedEnhancers(applyMiddleware(thunk)))

