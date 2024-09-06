import './envConfig.js'
const path = require('path')

// CONFIGURATION
const config = {
  db: {
    dialect: process.env.DB_DIALECT || 'sqlite',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'dev-db',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'rootpw',
    seederStorage: 'sequelize',
    storage: process.env.DB_STORAGE || path.join(process.env.SERVER_ROOT, 'db/dev-db.sqlite3')
  },
}

module.exports = config