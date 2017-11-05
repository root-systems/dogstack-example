const deepExtend = require('deep-extend')

var config = {
  port: 3000,
  favicon: 'app/favicon.ico',
  app: {
    name: 'Dogstack Example',
    url: 'http://localhost:3000',
  },
  assets: {
    root: 'app/assets',
    url: 'http://localhost:3000/'
  },
  bundler: {
    head: `
      <style id="app-styles"></style>
      <style id="app-fonts"></style>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet">
    `,
    body: `<div id='app'></div>`,
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

console.log('config', module.exports)
