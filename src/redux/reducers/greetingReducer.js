import { CHANGE_NAME } from '../actions/greetingActions'

const initialState = { name: 'Anonym' }

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { name: action.payload }
    default:
      return state
  }
}
