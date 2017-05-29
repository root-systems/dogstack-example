const { authenticate } = require('feathers-authentication').hooks
const local = require('feathers-authentication-local')
const jwt = require('feathers-authentication-jwt')

// authenticate the user using the a JWT or
// email/password strategy and if successful
// return a new JWT access token.

module.exports = function () {
  const app = this

  app
  .configure(jwt())
  .configure(local())

  app.service('authentication').hooks({
    before: {
      create: [
        authenticate(['jwt', 'local'])
      ]
    }
  })
}
