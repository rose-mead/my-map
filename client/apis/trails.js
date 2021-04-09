import request from 'superagent'

const rootUrl = '/api/v1'

export function getTrails () {
  return request.get(rootUrl + '/trails')
    .then(res => {
      return res.body
    })
}
