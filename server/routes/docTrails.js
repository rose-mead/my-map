const express = require('express')
const request = require('superagent')
const router = express.Router()

const { getRegionCode } = require('./utils')

const docRootUrl = (regionCode) => {
  return `https://api.doc.govt.nz/v1/tracks/region/${regionCode}?coordinates=nztm`
}
const apiKey = process.env.DOC_API_KEY


// get DOC walks by region id
router.get('/region/:regionCode', (req, res) => {
  const {regionCode} = req.params

  return request.get(docRootUrl(regionCode))
    .set('x-api-key', apiKey)
    .then(response => {
        res.json(response.body)
    })
    .catch(err => console.log('error in routes'))
})


module.exports = router