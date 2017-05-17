const { forEachObjIndexed } = require('ramda')
const hooks = require('feathers-hooks')
const socketio = require('feathers-socketio')
const configuration = require('feathers-configuration')
const authentication = require('feathers-authentication')
const local = require('feathers-authentication-local')
const jwt = require('feathers-authentication-jwt')

const services = {
  dogs: require('./dogs/service'),
  accounts: require('./accounts/service'),
  agents: require('./agents/service')
}

const authService = require('./authentication/service')

module.exports = function (db) {
  return function () {
    const app = this

    app.configure(configuration())
    app.configure(hooks())
    app.configure(socketio({
      wsEngine: 'uws'
    }))

    // services
    forEachObjIndexed((service, name) => {
      app.use(name, service(db))
      app.service(name).hooks({
        before: service.before || {},
        after: service.after || {},
        error: service.error || {}
      })
    }, services)

    console.log('auth', app.get('auth'))

    app
      .configure(authentication(app.get('auth')))
      .configure(jwt())
      .configure(local())
      .configure(authService())

    return app
  }
}
