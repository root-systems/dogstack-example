const feathersKnex = require('feathers-knex')
const { indexBy, prop, pipe } = require('ramda')

const indexById = indexBy(prop('id'))

module.exports = function (db) {
  return feathersKnex({
    Model: db,
    name: 'dogs'
  })
}

module.exports.after = {
  find: (hook)  => {
    hook.result = indexById(hook.result)
  }
}
