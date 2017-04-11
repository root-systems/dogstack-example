exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('accounts', function (table) {
    table.increments('id')
    table.string('password')
    table.string('email')
    table.unique('email')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('accounts')
}
