
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'John', email: 'j@host.com', hash: '', created_at: Date.now()},
        {id: 2, name: 'Sarah', email: 's@host.com', hash: '', created_at: Date.now()},
        {id: 3, name: 'Bill', email: '', hash: 'b@host.com', created_at: Date.now()}
      ]);
    });
};
