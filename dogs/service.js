const feathersKnex = require('feathers-knex')
const { indexBy, prop } = require('ramda')

module.exports = function (db) {
  return feathersKnex({
    Model: db,
    name: 'dogs'
  })
}

module.exports.after = {
  find: (hook)  => {
    hook.result = indexBy(prop('id'), hook.result)
  }
}
