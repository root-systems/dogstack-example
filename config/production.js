module.exports = {
  port: process.env.PORT,
  app: {
    url: process.env.APP_URL
  },
  assets: {
    url: process.env.ASSETS_URL
  },
  authentication: {
    secret: 'TODO',
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
  },
}
