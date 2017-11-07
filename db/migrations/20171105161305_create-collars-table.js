exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('collars', function (table) {
    table.increments('id')
    table.integer('dogId').references('dogs.id')
    table.string('color').notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('collars')
}
