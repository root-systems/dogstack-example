const feathersKnex = require('feathers-knex')
const hooks = require('feathers-hooks')

module.exports = function (db) {
  return feathersKnex({
    Model: db,
    name: 'agents'
  })
}

module.exports.before = {
}
