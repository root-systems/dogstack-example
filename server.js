const feathers = require('feathers')
const { join } = require('path')
const httpLogger = require('pino-http')
const errorHandler = require('feathers-errors/handler')
const UifyServer = require('uify-server')
const pump = require('pump')
const typeofIs = require('typeof-is')

const Service = require('./service')

if (process.env.NODE_ENV === 'development') {
  require('longjohn')
}

module.exports = function (options) {
  const { db, log } = options

  const app = feathers()

  app.use(httpLogger({
    logger: log
  }))

  // static files
  app.use('/', feathers.static(join(__dirname, 'assets')))

  // bundler
  app.use(Bundler({
    entry: join(__dirname, 'browser.js'),
    debug: app.get('env') === 'development',
    optimize: app.get('env') === 'production',
    head: `
      <style id="app-styles"></style>
      <style id="app-fonts"></style>
      <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet">
      <script src="/primus/primus.js"></script>
    `,
    body: `<div id='app'></div>`,
    log
  }))

  // service api
  app.configure(Service(db))

  app.use(function (err, req, res, next) {
    if (err) console.error('error', err)
    next(err)
  })

  // error handler
  app.use(errorHandler())
  return app
}

// wrap uify-server to be compatible with
// express middleware and next(err)
//
// TODO maybe this should be `express-uify`?
// or maybe `uify-server` shouldn't expect `http-sender`
function Bundler (options) {
  const uifyServer = UifyServer(options)

  return (req, res, next) => {
    uifyServer(req, res, {}, finalHandler)

    function finalHandler (err, value) {
      if (err) next(err)
      else valueHandler(req, res, next, value)
    }
  }

  function valueHandler (req, res, next, value) {
    if (typeofIs.string(value) || Buffer.isBuffer(value)) {
      res.send(value)
    } else {
      // is stream
      pump(value, res, err => {
        if (err) next(err)
      })
    }
  }
}
