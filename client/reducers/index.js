import { combineReducers } from 'redux'

import trails from './trails'
import favourites from './favourites'

export default combineReducers({
  trails,
  favourites
})
