const feathers = require('feathers')
const bodyParser = require('body-parser')
const rest = require('feathers-rest')
const hooks = require('feathers-hooks')
const { forEachObjIndexed } = require('ramda')

const configuration = require('feathers-configuration')
const authentication = require('feathers-authentication')
const local = require('feathers-authentication-local')
const jwt = require('feathers-authentication-jwt')

const services = {
  dogs: require('./dogs/service'),
  accounts: require('./account/service'),
  agents: require('./agent/service')
}

const authService = require('./authentication/service')

module.exports = function (db) {
  const app = feathers()
  app.configure(configuration())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.configure(rest())
  app.configure(hooks())
  // services
  forEachObjIndexed((service, name) => {
    app.use(name, service(db))
    app.service(name).hooks({
      before: service.before || {},
      after: service.after || {},
      error: service.error || {}
    })
  }, services)

  app.configure(authentication(app.get('auth')))
    .configure(jwt())
    .configure(local())
    .configure(authService())

  return app
}
