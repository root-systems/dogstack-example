exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('agents', function (table) {
      table.increments('id')
    }),
    knex.schema.table('accounts', function (table) {
      table.integer('agentId').references('agents.id')
    })
  ])
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('agents')
}
