/* global Primus */
import feathers from 'feathers/client'
import primus from 'feathers-primus/client'
import hooks from 'feathers-hooks'
import auth from 'feathers-authentication-client'
import rx from 'feathers-reactive'
import Rx from 'rxjs'

const localStorage = window ? window.localStorage : null

const socket = new Primus()

const client = feathers()
  .configure(primus(socket))
  .configure(hooks())
  .configure(rx(Rx))
  .configure(auth({
    storage: localStorage,
    accessTokenKey: 'dogstack'
  }))

export default client
