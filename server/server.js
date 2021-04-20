const express = require('express')
const path = require('path')
require('dotenv').config()

const trailRoutes = require('./routes/trails')
const favouriteRoutes = require('./routes/favourites')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/trails', trailRoutes)
server.use('/api/v1/favourite', favouriteRoutes)

module.exports = server
