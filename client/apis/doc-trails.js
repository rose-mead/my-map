import request from 'superagent'

const rootUrl = '/api/v1/doc-trails'

export function getDocTrails() {

    return request.get(rootUrl)
        .then(res => {
            return res.body
        })

}
