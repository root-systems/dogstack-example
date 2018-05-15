const deepExtend = require('deep-extend')

var config = {
  port: 3000,
  favicon: 'app/favicon.ico',
  app: {
    name: 'Dogstack Example',
    url: 'http://localhost:3000',
  },
  assets: {
    entry: 'browser.js',
    root: 'app/assets',
    url: 'http://localhost:3000/'
  }
}

config.browser = {
  app: config.app,
  assets: config.assets
}

module.exports = deepExtend(
  require('dogstack-agents/config'),
  config
)
