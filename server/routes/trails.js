const express = require('express')

const db = require('../db/trails')
const {convertKeysToSnake, convertValuesFromStrings} = require('../utils')

const router = express.Router()

router.get('/', (req, res) => {
  db.getTrails()
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/query?', (req, res) => {

  // /query?dogFriendly=true&swimming=true

  let filter = convertKeysToSnake(req.query)

  db.getTrailsByFilter(filter)
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/:id', (req, res) => {
  db.getTrailById(req.params.id)
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})


module.exports = router
