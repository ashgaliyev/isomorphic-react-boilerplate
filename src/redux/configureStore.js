import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import greetingReducer from './reducers/greetingReducer'

export default function(initialState = {}) {
  const rootReducer = combineReducers({
    greeting: greetingReducer,
  })

  return createStore(rootReducer, initialState, applyMiddleware(thunk))
}
