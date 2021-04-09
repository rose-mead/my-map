const express = require('express')

const db = require('../db/trails')
const {convertKeysToSnake, convertValuesFromStrings} = require('../utils')

const router = express.Router()

router.get('/', (req, res) => {
  const id = 1  // todo - get user id from user token
  db.getFavouriteTrailsByUser(id)
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.delete('/:id', (req, res) => {
  const id = 1 // todo - get user id from user token
  db.deleteTrailFromUsersFavourites(id, req.params.id)
  .then(() => {
    res.sendStatus(200)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Something went wrong' })
  })
})



module.exports = router
