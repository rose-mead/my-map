import { getTrails } from '../apis/trails'
import { getFavourites } from '../apis/favourites'

export const SET_TRAILS = 'SET_TRAILS'
export const SET_FAVOURITES = 'SET_FAVOURITES'

export function setTrails (trails) {
  return {
    type: SET_TRAILS,
    trails
  }
}

export function fetchTrails () {
  return dispatch => {
    return getTrails()
      .then(trails => {
        dispatch(setTrails(trails))
        return null
      })
  }
}

export function setFavourites (favourites) {
  return {
    type: SET_FAVOURITES,
    favourites
  }
}

export function fetchFavourites () {
  return dispatch => {
    return getFavourites()
      .then(favourites => {
        dispatch(setFavourites(favourites))
        return null
      })
  }
}
