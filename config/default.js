module.exports = {
  port: 3000,
  favicon: 'app/favicon.ico',
  assets: 'assets',
  bundler: {
    head: `
      <style id="app-styles"></style>
      <style id="app-fonts"></style>
      <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet">
    `,
    body: `<div id='app'></div>`,
  },
  auth: {
    secret: 'CHANGE-ME',
    service: 'accounts',
    entity: 'account',
    local: {
      service: 'accounts',
      entity: 'account'
    }
  }
}
