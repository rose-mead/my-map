import { SET_TRAILS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRAILS:
      return action.trails
    default:
      return state
  }
}

export default reducer
