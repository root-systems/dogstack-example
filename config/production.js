module.exports = {
  api: {
    port: process.env.PORT,
    name: process.env.APP_NAME,
    url: process.env.API_URL,
  },
  asset: {
    port: process.env.ASSET_PORT,
    entry: process.env.ASSET_ENTRY,
    root: process.env.ASSET_ROOT,
    url: process.env.ASSET_URL
  },
  log: {
    level: process.env.LOG_LEVEL
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
