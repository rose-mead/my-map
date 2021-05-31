import request from 'superagent'

const rootUrl = '/api/v1/doc-trails'

export function getDocTrailsByRegion(region) {
    return request.get(`${rootUrl}/region/${region}`)
        .then(res => {
            return res.body
        })
}

export function getDocTrailById(id) {
    return request.get(`${rootUrl}/trail/${id}`)
        .then(res => {
            return res.body
        })
}
