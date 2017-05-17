import feathers from 'feathers/client'
import socketio from 'feathers-socketio/client'
import hooks from 'feathers-hooks'
import auth from 'feathers-authentication-client'
import rx from 'feathers-reactive'
import Rx from 'rxjs'
import io from 'socket.io-client'

const localStorage = window ? window.localStorage : null

const socket = io()

const client = feathers()
  .configure(socketio(socket))
  .configure(hooks())
  .configure(rx(Rx))
  .configure(auth({
    storage: localStorage,
    accessTokenKey: 'dogstack'
  }))

export default client
