const feathersKnex = require('feathers-knex')
const hooks = require('feathers-hooks')
const hashPassword = require('feathers-authentication-local').hooks.hashPassword
const auth = require('feathers-authentication').hooks

module.exports = function (db) {
  return feathersKnex({
    Model: db,
    name: 'accounts'
  })
}

module.exports.before = {
  create: [
    hashPassword(),
    createAgent,
  ]
}

module.exports.error = {
  create: [
    deleteAgentIfCreateFailed,
  ]
}

function createAgent(hook) {
  const agents = hook.app.service('agents')
  const account = hook.data

  if (!account) return Promise.resolve(hook)

  return agents.create({})
    .then(agent => {
      hook.data.agentId = agent.id
      return Promise.resolve(hook) 
    })
}

function deleteAgentIfCreateFailed(hook) {
  const agents = hook.app.service('agents')
  const agentToDelete = hook.data.agentId
  return agents.remove({id: agentToDelete})
    .then(() => Promise.resolve(hook))
}
