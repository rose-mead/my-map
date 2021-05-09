import { SET_TRAILS } from '../actions'
import { SET_TRAIL } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRAIL:
      return action.trail
    default:
      return state
  }
}

export default reducer
