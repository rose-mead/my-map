const connection = require('./connection')

function getTrails (db = connection) {
  return db('trails').select()
}

function getTrailById(id, db = connection) {
  return db('trails').select().where('id', id)
}

function getTrailsByFilter(filter, db = connection) {
  return db('trails').select().where(filter)
}

function getFavouriteTrailsByUser(id, db = connection) {  
  return db('trails')
  .join('users_trails', 'users_trails.trail_id', 'trails.id')
  .select()
  .where('user_id', id)
}

function deleteTrailFromUsersFavourites(userId, trailId, db = connection) {
  return db('users_trails').delete().where({trail_id: trailId, user_id: userId})
}

module.exports = {
  getTrails,
  getTrailById,
  getTrailsByFilter,
  getFavouriteTrailsByUser,
  deleteTrailFromUsersFavourites
}
