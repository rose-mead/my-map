import request from 'superagent'
import {formatDocTrailAsJson} from '../components/utils'

const rootUrl = '/api/v1/doc-trails'

export function getDocTrailsByRegion(region) {
    return request.get(`${rootUrl}/region/${region}`)
        .then(res => {
            const geoJsonData = res.body.map(trail => formatDocTrailAsJson(trail))
            return geoJsonData
        })
}

export function getDocTrailById(id) {
    return request.get(`${rootUrl}/trail/${id}`)
        .then(res => {
            return formatDocTrailAsJson(res.body)
        })
}
