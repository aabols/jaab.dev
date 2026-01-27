'use strict'
import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    static associate(models) {
      // define association here
      List.belongsToMany(models.User, { through: 'UserLists' })
    }
  }
  List.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'List',
  })
  return List
}