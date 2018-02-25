module.exports = {
  port: process.env.PORT,
  app: {
    url: process.env.APP_URL
  },
  assets: {
    url: process.env.ASSETS_URL
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
