import request from 'superagent'

const rootUrl = '/api/v1'

export function getFavourites () {
  return request.get(rootUrl + '/favourite')
    .then(res => {
      return res.body
    })
}
