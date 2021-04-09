import { getTrails } from '../apis/trails'

export const SET_TRAILS = 'SET_TRAILS'

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
        console.log(trails);
        dispatch(setTrails(trails))
        return null
      })
  }
}
