const express = require('express')
const request = require('superagent')
const router = express.Router()

const docRootUrl = "https://api.doc.govt.nz/v1/tracks"
const apiKey = process.env.DOC_API_KEY


// get DOC walks by region id
router.get('/region/:regionCode', (req, res) => {
  const {regionCode} = req.params
  const url = `${docRootUrl}/region/${regionCode}?coordinates=nztm`
  console.log(url)
  return request.get(url)
    .set('x-api-key', apiKey)
    .then(response => {
        res.json(response.body)
    })
    .catch(err => console.log('error in routes'))
})

// get a specific DOC walk by track id
router.get('/trail/:id', (req, res) => {
  const {id} = req.params
  const url = `${docRootUrl}/${id}/detail?coordinates=nztm`

  return request.get(url)
    .set('x-api-key', apiKey)
    .then(response => {
        res.json(response.body)
    })
    .catch(err => console.log('error in routes'))
})


module.exports = router