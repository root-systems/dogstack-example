exports.up = function (knex, Promise) {
  Promise.all([
    return knex.schema.createTableIfNotExists('agents', function (table) {
      table.increments('id')
    })
  
  ])
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('accounts')
}

exports.up = function(knex, Promise) {
  
};

exports.down = function(knex, Promise) {
  
};
