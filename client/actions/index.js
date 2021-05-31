import { getTrails } from '../apis/trails'
import { getDocTrailsByRegion } from '../apis/DocTrails'
import { getFavourites } from '../apis/favourites'

export const SET_TRAILS = 'SET_TRAILS'
export const SET_DOC_TRAILS = 'SET_DOC_TRAILS'
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


export function setDocTrails (trails) {
  return {
    type: SET_DOC_TRAILS,
    trails
  }
}


export function fetchDocTrails () {
  return dispatch => {
    return getDocTrailsByRegion('NZ-WGN')
      .then(trails => {
        dispatch(setDocTrails(trails))
        return null
      })
  }
}
