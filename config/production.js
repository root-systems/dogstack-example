module.exports = {
  port: process.env.PORT,
  api: {
    port: process.env.API_PORT,
    name: process.env.APP_NAME,
    url: process.env.API_URL,
  },
  asset: {
    port: process.env.ASSET_PORT,
    entry: process.env.ASSET_ENTRY,
    root: process.env.ASSET_ROOT,
    url: process.env.ASSET_URL
  },
  authentication: {
    secret: process.env.AUTHENTICATION_SECRET,
    remote: {
      google: {
        clientID: 'TODO',
        clientSecret: 'TODO'
      },
      facebook: {
        clientID: 'TODO',
        clientSecret: 'TODO'
      },
      github: {
        clientID: 'TODO',
        clientSecret: 'TODO'
      }
    }
  }
}
