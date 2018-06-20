const deepExtend = require('deep-extend')

var config = {
  favicon: 'app/favicon.ico',
  api: {
    port: 3001,
    name: 'Dogstack Example',
    url: 'http://localhost:3001/',
  },
  asset: {
    port: 3000,
    entry: 'browser.js',
    root: 'app/assets',
    url: 'http://localhost:3000/'
  },
  log: {
    level: 'info'
  }
}

config.browser = {
  api: config.api,
  asset: config.asset
}

module.exports = deepExtend(
  require('dogstack-agents/config'),
  config
)
