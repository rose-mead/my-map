
exports.up = function (knex) {
    return knex.schema.createTable('users_trails', table => {
      table.increments('id')
      table.string('user_id')
      table.string('trail_id')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('users_trails')
  }