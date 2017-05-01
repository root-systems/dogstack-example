// const logDebug = require('pino-debug')
const Log = require('pino')
const prettyStream = require('pino-colada')

const level = process.env.LEVEL || 'info'
const pretty = process.env.NODE_ENV === 'development'
const name = 'example'

var stream
if (pretty) {
  stream = prettyStream()
  stream.pipe(process.stdout)
}

const log = Log({ name, level }, stream)

// logDebug(log)

module.exports = log
