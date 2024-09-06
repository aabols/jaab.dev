const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const config = require('../../config.js')
const sequelize = new Sequelize(config.db)

const Flashcard = require('./flashcard.js')(sequelize, Sequelize.DataTypes)
const User = require('./user.js')(sequelize, Sequelize.DataTypes)

const db = {
  Flashcard,
  User
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) { db[modelName].associate(db) }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
