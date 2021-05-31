import { combineReducers } from 'redux'

import trails from './trails'
import docTrails from './docTrails'
import favourites from './favourites'

export default combineReducers({
  trails,
  docTrails,
  favourites
})
