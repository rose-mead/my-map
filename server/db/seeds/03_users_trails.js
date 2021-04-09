
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_trails').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_trails').insert([
        {id: 1, user_id: 1, trail_id: 1},
        {id: 2, user_id: 1, trail_id: 2},
        {id: 3, user_id: 2, trail_id: 3}
      ]);
    });
};
