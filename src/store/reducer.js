import { createStore } from "redux"

const initialState = {
  counter: 0
}

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return 
        conter: state.counter + 1
    default:
      return state
  }
}

export const store = createStore(counterReducer)