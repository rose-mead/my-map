
exports.up = function (knex) {
    return knex.schema.createTable('users_trails', table => {
      table.increments('id')
      table.integer('user_id').references('users.id')
      table.integer('trail_id').references('trails.id')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('users_trails')
  }