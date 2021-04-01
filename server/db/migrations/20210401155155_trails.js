
exports.up = function (knex) {
    return knex.schema.createTable('trails', table => {
      table.increments('id')
      table.string('name')
      table.string('description')
      table.integer('length')
      table.boolean('dog_friendly')
      table.boolean('swimming')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('trails')
  }