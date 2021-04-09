
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trails').del()
    .then(function () {
      // Inserts seed entries
      return knex('trails').insert([
        {id: 1, name: 'Mt Kaukau', description: '', length: 3, dog_friendly: true, swimming: false},
        {id: 2, name: 'Colonial Knob', description: '', length: 4, dog_friendly: false, swimming: true},
        {id: 3, name: 'Seton Nositter', description: '', length: 5, dog_friendly: false, swimming: false}
      ]);
    });
};
