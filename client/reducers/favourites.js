import { SET_FAVOURITES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVOURITES:
      return action.favourites
    default:
      return state
  }
}

export default reducer
