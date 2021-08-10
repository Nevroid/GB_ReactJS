import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import profileReducer from './reducers/profileReducer'
import chatReducer from './reducers/chatReducer'

const composedEnhancer = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const rootReducer = combineReducers({
  profile: profileReducer,
  chat: chatReducer
})

export const store = createStore(rootReducer, composedEnhancer)

