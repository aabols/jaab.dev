'use strict'
import { Model } from 'sequelize'
import { hashSync } from 'bcrypt'

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'Username required' },
        notEmpty: { msg: 'Username required' },
        isAlphanumeric: { msg: 'Only letters and numbers in username' },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(password) {
        if (!password) { throw new Error('Password required') }
        if (password.length < 8) throw { status: 400, message: 'Password should be at least 8 characters' }
        this.setDataValue(
          'password',
          hashSync(password, 10)
        )
      }
    },
  }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
      attributes: ['username'],
    },
    scopes: {
      auth: {
        attributes: ['username', 'password'],
      },
    },
  })
  return User
};