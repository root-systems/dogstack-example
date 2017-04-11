const feathersKnex = require('feathers-knex')
const { indexBy, prop, pipe } = require('ramda')

const indexByProperty = pipe(prop, indexBy)

module.exports = function (db) {
  return feathersKnex({
    Model: db,
    name: 'dogs'
  })
}

module.exports.after = {
  find: (hook)  => {
    hook.result = indexByProperty('id')(hook.result)
  }
}
