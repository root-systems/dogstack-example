var { join } = require('path')
// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: join(__dirname, 'dev.sqlite3')
    },
    migrations: {
      directory: join(__dirname, 'migrations')
    },
    seeds: {
      directory: join(__dirname, 'seeds')
    },
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    migrations: {
      directory: join(__dirname, 'migrations')
    },
    seeds: {
      directory: join(__dirname, 'seeds')
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: join(__dirname, 'migrations')
    },
    seeds: {
      directory: join(__dirname, 'seeds')
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: join(__dirname, 'migrations')
    },
    seeds: {
      directory: join(__dirname, 'seeds')
    }
  }
}
