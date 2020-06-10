import { createStore } from 'redux'
import { INCREMENT } from './constants'

const initialState = {
  counter: 1
}

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1
      }
    default:
      return state
  }
}

export const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())