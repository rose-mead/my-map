import { SET_DOC_TRAILS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DOC_TRAILS:
      return action.trails
    default:
      return state
  }
}

export default reducer
