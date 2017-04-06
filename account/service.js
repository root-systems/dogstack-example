const feathersKnex = require('feathers-knex')
const hooks = require('feathers-hooks')
var hashPassword = require('feathers-authentication-local').hooks.hashPassword
const auth = require('feathers-authentication').hooks

module.exports = function (db) {
  return feathersKnex({
    Model: db,
    name: 'accounts'
  })
}

module.exports.before = {
  create: hashPassword() 
}
